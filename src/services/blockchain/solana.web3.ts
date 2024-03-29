import * as solanaWeb3 from '@solana/web3.js';

import * as anchor from '@coral-xyz/anchor';
import {
	Connection,
	Keypair,
	LAMPORTS_PER_SOL,
	PublicKey,
	SOLANA_SCHEMA,
	Signer,
	SystemProgram,
	clusterApiUrl
} from '@solana/web3.js';
import {
	AnchorProvider,
	web3,
	utils,
	BN,
	Provider,
	Program
} from '@project-serum/anchor';

import crowdFundingIDL from '../idl/crowdfunding.json';
import { IdoInfoType } from '../../types';
import { _getAllocation, getIdoInfo, infoWallet } from '../utils';
import { IdoFindPda } from '../helpers';
import { AllocationWallet, CalculateAllowInfoResult, GetInfoAllocationParams, InfoAllocationResult, UserStraitPda, WalletInfo } from '../../types/ido.type';
import {
    getAssociatedTokenAddressSync,
  } from "@solana/spl-token"

const programIdoID = new PublicKey(crowdFundingIDL.metadata.address)
const opts = {
	preflightCommitment: "processed",
	commitment: "processed",
  } as solanaWeb3.ConfirmOptions 
	


// const provider = getProvider();





// export const getStakingInfo = async (contractAddress: string) => {

// }
const DEV_NET = solanaWeb3.clusterApiUrl('devnet');


 class Web3SolanaUtils {
		private provider: Provider;
		constructor(provider: string) {
			const connection = new Connection(DEV_NET,"processed");
			
			this.provider =  new AnchorProvider(connection, window.solana, opts);;
		}

	getAddressInfo = async (address : string) : Promise<number>  => {
		const wallet = new solanaWeb3.PublicKey(address);
		const accountBalance = await this.provider.connection.getBalance(wallet);
	
		return accountBalance;
	};

	getProjectDetail = async (contractAddress: string) : Promise<IdoInfoType | undefined>=>{
	
		const idoPdData = await this.getPdaIdoAccount(new PublicKey(contractAddress));
		debugger
		const currentTimestamp = Math.floor(Date.now() / 1000);
		if(!idoPdData) return undefined
		//@ts-ignore
		return getIdoInfo(idoPdData, currentTimestamp);
	
	}
	async getBlockNumber(): Promise<number>{
		return await this.provider.connection.getSlot()
	}


	async getWalletInfo(contractAddress: string, walletAddress: PublicKey): Promise<WalletInfo | undefined>{
	
		const walletPDA = IdoFindPda.getPdaUser(programIdoID, new PublicKey(contractAddress), new PublicKey(walletAddress));
		try {
			const userPdaData = await this.getPdaUserData(walletPDA);
	
			const idoPdData = await this.getPdaIdoAccount(new PublicKey(contractAddress));
			if(!idoPdData) return undefined
			const currentTimestamp = Math.floor(Date.now() / 1000);

			const walletInfo = infoWallet(idoPdData , userPdaData , currentTimestamp);
			
			const tokenBalance = await this.getBalanceOfToken(new PublicKey(idoPdData.raiseToken), walletAddress);

			return {
				...walletInfo,
				tokenBalance: tokenBalance
			};
			
			
		} catch (error) {
			console.log("error", error);
			return {
				tier: 0,
				tierName: "",
				round: 0,
				roundState: 0,
				roundStateText: "",
				roundTimestamp: 0,
				userParticipation: "0",
				remainingAllocation: "0",
				tokenBalance: "0"
			};
			
		}
		
		
	}

	async getAllocationRemaining (round: number,tier: number,idoAccount: IdoInfoType,userPda: UserStraitPda): BN {
		if (tier == 0 || round == 0) {
			return new BN(0);
		}
		const roundIndex = round - 1;
		const tierIndex = tier - 1;
		if (
			roundIndex > idoAccount.tiers.length ||
			tierIndex > idoAccount.tiers.length ||
			tierIndex != userPda.tierIndex
		) {
			return new BN(0);
		}
		if (userPda.allocated) {
			const participated = userPda.participateAmount;
			const allocated = idoAccount.rounds[roundIndex].tierAllocations[tierIndex];
			if (participated < allocated) return allocated.sub(participated);
		}
	
		return new BN(0);
	};

	getConnectionProvider(){
		return this.provider.connection;
	}
	

	async getPdaUserData(walletPDA: PublicKey): Promise<UserStraitPda>{
		try {
			const program = this.getProgramIdo();
			const userPdaData = await program.account.pdaUserStats.fetch(walletPDA);
			return userPdaData as UserStraitPda;
		} catch (error) {
			return {
				address: walletPDA,
				tierIndex: 0,
				allocated: false,
				participateAmount: new BN(0),
				claimAmount: new BN(0),
				owner: walletPDA
			};
		}
	}

	async getPdaIdoAccount(contractAddress: PublicKey): Promise<IdoInfoType | undefined>{
		try {
			const program = this.getProgramIdo();
			const idoAccount = await program.account.idoAccount.fetch(contractAddress);
			return idoAccount as IdoInfoType;
		} catch (error) {
			console.log("error", error);
			return undefined;
		}
	}

	async getAllocationWallet(): Promise<AllocationWallet | undefined>{
		return {
			fromTimestamp: 0,
			toTimestamp: 0,
			percent: 0,
			claimable: 0,
			total: 0,
			claimed: 0,
			remaining: 0,
			status: 0
		};
	}
	async getAllocationsInfo(contractAddress: PublicKey, walletAddress: PublicKey): Promise<CalculateAllowInfoResult | undefined>{
		try {
			const data = await this._getAllocations(walletAddress, contractAddress);
			if(!data) return undefined;
			const allowInfo = this._calculateAllowInfo(data);
			return allowInfo;
		} catch (error) {
			console.log("error", error);
			return undefined;
		}
	}

	async getBalanceOfToken(raise_token_mint: PublicKey, walletAddress: PublicKey): Promise<string>{
		try {
			const tokenAmount  = await	this.getTokenAmountOfAddress(raise_token_mint, walletAddress)
			if(!tokenAmount) return "0"
			return tokenAmount.amount.toString();
		} catch (error) {
			console.log("error", error);
			return "0"; 
		}
	}

	async getTokenAmountOfAddress(raise_token_mint: PublicKey, walletAddress: PublicKey): Promise<solanaWeb3.TokenAmount | undefined>{
		try {
			if(!raise_token_mint || !walletAddress) return undefined;
			const tokenAccount = getAssociatedTokenAddressSync(raise_token_mint, walletAddress, true);
			const data = await this.provider.connection.getTokenAccountBalance(tokenAccount);
			return data.value;
		} catch (error) {
			// console.log("error", error);
			return undefined; 
		}
	}

	
	private getProgramIdo(){
		//@ts-ignore
		return new Program(crowdFundingIDL, programIdoID, this.provider);
	
	}

	private async _getAllocations(wallet: PublicKey, contractAddress:  PublicKey,): Promise<InfoAllocationResult | undefined>{
		let allocNumberList: Array<number>;
		let allocAmountList: Array<BN>;
		let allocClaimedList: Array<BN>;
		let allocReleasedList: Array<BN>;
		let allocStatusList: Array<number>;
	
		const idoAccount = await this.getPdaIdoAccount(contractAddress);
		if(!idoAccount) return undefined;

		const walletPDA = IdoFindPda.getPdaUser(programIdoID, contractAddress, wallet);
		const userPda = await this.getPdaUserData(walletPDA);
		const slot = await this.getConnectionProvider().getSlot();
		const now_ts = await this.getConnectionProvider().getBlockTime(slot);
		const  {raiseToken, releaseToken, releases} = idoAccount;


		const tokenAmount = await this.getTokenAmountOfAddress(new PublicKey(raiseToken), contractAddress);


		if (releaseToken !=  PublicKey.default.toString()  &&releases.length > 0) {
			let rows = releases.length * 2;
			 allocNumberList = new Array<number>(rows);
			 allocAmountList = new  Array<BN>(rows);
			 allocClaimedList = new Array<BN>(rows);
			 allocReleasedList = new Array<BN>(rows);
			 allocStatusList = new Array<number>(rows);


			for (let i = 0; i < releases.length; i++) {

				const row = i*2;

				const allocation  = _getAllocation({
				    idoAccount: idoAccount, 
					userPda: userPda, 
					index: i, 
					now_ts: now_ts,
					releaseTokenAccount: tokenAmount,	
				} as GetInfoAllocationParams);
				if(!allocation) return;
				const {claimable, total, claimed, percent, fromTimestamp, toTimestamp, status} = allocation;

				allocNumberList[row] = i+1;
				allocNumberList[row+1] = i+1;
				allocAmountList[row] = claimable;
                allocAmountList[row+1] = total;
                
                allocClaimedList[row] = claimed;
                allocClaimedList[row+1] = percent;
                
                allocReleasedList[row] = fromTimestamp;
                allocReleasedList[row+1] = toTimestamp;
                
                allocStatusList[row] = status;
                allocStatusList[row+1] = 0;
			}
			return {
				allocNumberList,
				allocAmountList,
				allocClaimedList,
				allocReleasedList,
				allocStatusList
			} as InfoAllocationResult;
		}
		return undefined;
	}
	private _calculateAllowInfo (data: InfoAllocationResult): CalculateAllowInfoResult | undefined{
		if(!data) return;
		let infoAllocation = [];
		const claimStatus = {
			0: "PENDING",
			1: "OPEN",
			2: "CLOSED",
		};
		const row1 = data.allocNumberList
		const row2 = data.allocAmountList
		const row3 = data.allocClaimedList
		const row4 = data.allocReleasedList
		const row5 = data.allocStatusList

		if (row1.length >= 2) {
			//@ts-ignore
			if (row1[0].toString() ^ row1[1].toString() === 0) {
				//layout2
				for (let i = 0; i < row1.length - 1; i++) {
	
					const item = row1[i]?.toString()
			  
					const nextItem = row1[i + 1]?.toString()
					if (item === nextItem) {
	
						// console.log("next status==>", row5[i+1]);
						const allocationAmount = (row2[i] === row2[i + 1]) ? row2[i] : `${Number(row2[i])}-${Number(row2[i+1])}`
						const timestamp = (row3[i] === row3[i + 1]) ? row3[i] : `${Number(row3[i])}-${Number(row3[i+1])}`;
						const percentage = row4[i + 1]
	
						infoAllocation.push({
							no: item,
							allocationAmount: Number(allocationAmount),
							timestamp: Number(timestamp),
							claimedAmount: Number(row4[i]),
							//@ts-ignore
							status: claimStatus[Number(row5[i])],
							percentage: Number(percentage)
						})
					}
				}
		 
	
				return {
					layout: 2,
					infoAllocation
				};
			}
		}
	
		for (let i = 0; i < row1.length; i++) {
			infoAllocation.push({
				no: row1[i],
				allocationAmount: Number(row2[i]),
				timestamp: Number(row3[i]),
				claimedAmount: Number(row4[i]),
				//@ts-ignore
				status: claimStatus[Number(row5[i])],
			});
		}
	
		return {
			layout: 1,
			infoAllocation,
		}
	}
}
export const solaUtils = new Web3SolanaUtils(DEV_NET);

 