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
import { StakingAccountInfo, StakerAccountInfo, RewardAccountInfo, StakerDetail } from '../../types/staking.type';
import { config } from '../../_config';

const programStakingID = new PublicKey(stakingIdl.metadata.address)
const opts = {
	preflightCommitment: "processed",
	commitment: "processed",
} as solanaWeb3.ConfirmOptions
let token_staking_decimals = 9;




class StakingWeb3Utils {
	private provider: Provider;

	constructor(network: string) {

		const connection = new Connection(network, "processed");

		this.provider = new AnchorProvider(connection, window.solana, opts);;
	}

	async getStakingInfo() {


	}

	async getStakingAccountData(): Promise<StakingAccountInfo> {
		const program = this.getStakingProgram();
		const stakingContractPda = stakingFindPda.getPdaStaking(program);
		const pdaStakingInfo = await program.account.swapStakingContract.fetch(stakingContractPda) as StakingAccountInfo;
		return pdaStakingInfo;
	}
	async getStakerAccountData(stakingContractPda: PublicKey, wallet: PublicKey): Promise<StakerAccountInfo> {
		const program = this.getStakingProgram();
		const userStakingPda = stakingFindPda.getUserStakingPda(program, stakingContractPda, wallet);
		
		const userStakingData = await program.account.userStakingDepositAccount.fetch(userStakingPda) as StakerAccountInfo;
		return userStakingData;
	}

	async getRewardAccountData(): Promise<RewardAccountInfo> {


		const program = this.getStakingProgram();
		const rewardPda = stakingFindPda.getPdaReward(program);
		const userStakingData = await program.account.rewardStakingContract.fetch(rewardPda) as RewardAccountInfo;
		return userStakingData;
	}

	private async _computed_Reward(stakingInfo: StakingAccountInfo, rewardInfo: RewardAccountInfo, stakerDeposit: StakerAccountInfo): BN {
		const totalRewardPoints = rewardInfo.totalRewardPoints;
		let rewardsPoints = new BN(0);
		if (stakerDeposit.endDate.toNumber() === 0) {
			rewardsPoints = totalRewardPoints.sub(stakerDeposit.entryRewardPoints);
		} else {
			rewardsPoints = stakerDeposit.exitRewardPoints.sub(stakerDeposit.exitRewardPoints);
		}
		return stakerDeposit.amountDeposit.mul(rewardsPoints).div(10 ** token_staking_decimals);
	}

	async getStakeDetails(stakingContractPda: PublicKey, wallet: PublicKey): Promise<StakerDetail> {
		try {
			const stakingInfo = await this.getStakingAccountData();
			const rewardInfo = await this.getRewardAccountData();
			const stakerDeposit = await this.getStakerAccountData(stakingContractPda, wallet);

			const reward = await this._computed_Reward(stakingInfo, rewardInfo, stakerDeposit);
			
			const unstakingPeriod = stakingInfo.unStakingPeriod;
			return {
				startDate: stakerDeposit.startDate.toNumber(),
				endDate: stakerDeposit.endDate.toNumber(),
				reward: reward.toNumber(),
				staked: stakerDeposit.amountDeposit.toNumber(),
				unstaked: stakerDeposit.amountWithdrawn.toNumber(),
				withdrawTimestamp: stakerDeposit.endDate.toNumber() + unstakingPeriod
			} as StakerDetail;
		} catch (error) {
			// console.log("getStakeDetails error", error);
			return {
				startDate: 0,
				endDate: 0,
				reward: 0,
				staked: 0,
				unstaked: 0,
			} as StakerDetail;

		}

	}
























	private getStakingProgram() {
		//@ts-ignore
		return new Program(stakingIdl, programStakingID, this.provider);

	}



}
export const stakingWeb3Utils = new StakingWeb3Utils(config.SOLANA_RPC);

