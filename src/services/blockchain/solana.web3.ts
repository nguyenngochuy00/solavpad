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
import { getIdoInfo, infoWallet } from '../utils';
import { IdoFindPda } from '../helpers';
import { UserStraitPda, WalletInfo } from '../../types/ido.type';
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
			
			const tokenBalance = await this.getBalanceOfToken(idoPdData.raiseToken, walletAddress);

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

	async getBalanceOfToken(raise_token_mint: PublicKey, walletAddress: PublicKey): Promise<string>{
		try {
			const tokenAccount = getAssociatedTokenAddressSync(raise_token_mint, walletAddress, true);
			const data = await this.provider.connection.getTokenAccountBalance(tokenAccount);
			return data.value.amount;
		} catch (error) {
			console.log("error", error);
			return "0"; 
		}
	}
	private getProgramIdo(){
		//@ts-ignore
		return new Program(crowdFundingIDL, programIdoID, this.provider);
	
	}
}
export const solaUtils = new Web3SolanaUtils(DEV_NET);

 