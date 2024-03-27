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
import { getIdoInfo } from '../utils';


const programID = new PublicKey(crowdFundingIDL.metadata.address)
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
	
		//@ts-ignore	
		const program = new Program(crowdFundingIDL, programID, this.provider);
		if(!contractAddress) {
			return undefined;
		}
		
		const idoPdData = await program.account.idoAccount.fetch(contractAddress);
	
		const currentTimestamp = Math.floor(Date.now() / 1000);
		if(!idoPdData) return undefined
		//@ts-ignore
		return getIdoInfo(idoPdData, currentTimestamp);
	
	}
	async getBlock(): Promise<number>{
		const blockNumber = await this.provider.connection.getSlot()
		return blockNumber;
	}
	getConnectionProvider(){
		return this.provider.connection;
	}
}
export const solaUtils = new Web3SolanaUtils(DEV_NET);

 