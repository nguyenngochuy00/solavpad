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

const DEV_NET = solanaWeb3.clusterApiUrl('devnet');

const programID = new PublicKey(crowdFundingIDL.metadata.address)
const opts = {
	preflightCommitment: "processed",
	commitment: "processed",
  } as solanaWeb3.ConfirmOptions 
const getProvider = () =>{
    const connection = new Connection(DEV_NET,"processed");
    const provider = new AnchorProvider(connection, window.solana, opts);
    return provider
  }


// const provider = getProvider();


export const getAddressInfo = async (address : string) => {
	const provider = getProvider();
	const wallet = new solanaWeb3.PublicKey(address);
	const accountBalance = await provider.connection.getBalance(wallet);

	return accountBalance;
};

export const getProjectDetail = async (contractAddress: string) : Promise<IdoInfoType | undefined>=>{
	const provider = getProvider();
	debugger
	//@ts-ignore	
	const program = new Program(crowdFundingIDL, programID, provider);
	if(!contractAddress) {
		return undefined;
	}
	
	const idoPdData = await program.account.idoAccount.fetch(contractAddress);

	const currentTimestamp = Math.floor(Date.now() / 1000);
	if(!idoPdData) return undefined
	//@ts-ignore
	return getIdoInfo(idoPdData, currentTimestamp);

}
