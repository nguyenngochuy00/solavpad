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
	Program,
	AnchorProvider,
	web3,
	utils,
	BN,
	Provider
} from '@project-serum/anchor';
import { CROWD_FUNDIND_CONTRACT } from 'src/constants/contract';
import idl from '../idl/crowdfunding.json';

const DEV_NET = clusterApiUrl('devnet');
const connection = new Connection(DEV_NET);

const opts = {
	preflightCommitment: 'recent'
};

const getProvider = () => {
	const provider = new AnchorProvider(
		connection,
		window.solana,
		opts.preflightCommitment
	);
	return provider;
};

export const getIDOProjectDetail = async () => {
	try {
		const programID = new PublicKey(idl?.metadata?.address);
		const provider = getProvider();
		const program = new Program(idl, programID, provider);
		const idoInfo = await program.account.idoAccount.fetch(
			CROWD_FUNDIND_CONTRACT
		);
		console.log('getIDOProjectDetail=====', idoInfo);
	} catch (error) {
		console.log('errrr', error);
		return null;
	}
};
