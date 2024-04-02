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

import stakingIdl from '../idl/solpad_staking.json';
import { IdoInfoType } from '../../types';
import { AllocationWallet, CalculateAllowInfoResult, GetInfoAllocationParams, InfoAllocationResult, UserStraitPda, WalletInfo } from '../../types/ido.type';
import {
	getAssociatedTokenAddressSync,
} from "@solana/spl-token"
import { stakingFindPda } from '../helpers';
import { StakingInfo } from '../../types/staking.type';

const programStakingID = new PublicKey(stakingIdl.metadata.address)
const opts = {
	preflightCommitment: "processed",
	commitment: "processed",
} as solanaWeb3.ConfirmOptions


const DEV_NET = solanaWeb3.clusterApiUrl('devnet');


class StakingWeb3Utils {
	private provider: Provider;

	constructor(network: string) {
        
		const connection = new Connection(network, "processed");

		this.provider = new AnchorProvider(connection, window.solana, opts);;
	}

    async getStakingInfo(){
    



    }

    async getStakingAccountData(): Promise<StakingInfo>{
        const program = this.getStakingProgram();
        const stakingContractPda = stakingFindPda.getPdaStaking(programStakingID);
        const pdaStakingInfo  = await program.account.stakingAccount.fetch(stakingContractPda) as StakingInfo;
        return pdaStakingInfo;
    }




	


	

	






	







	private getStakingProgram() {
		//@ts-ignore
		return new Program(stakingIdl, programStakingID, this.provider);

	}

	

}
export const stakingWeb3Utils = new StakingWeb3Utils(DEV_NET);

