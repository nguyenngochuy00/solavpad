import { PublicKey } from "@solana/web3.js"
import { BN } from '@project-serum/anchor';


export type StakingAccountInfo = {
    pause: boolean,
    decimal?: number,
    countStaker: number,
    unstakingPeriod: number,
    maxStakingAmount: BN,
    currentTotalStake: BN,
    token: PublicKey,
}

export type RewardAccountInfo = {
    totalRewardsDistributed: number,
    rewardsDistributed: number,
    rewardsWithdrawn: number,
    totalRewardPoints: BN,
    currentTotalStake: BN,
    token: PublicKey,
}


export type StakerAccountInfo = {
    startDate: BN,
    endDate: BN,
    initiateDate:BN,
    amountDeposit: BN,
    entryRewardPoints: BN,
    exitRewardPoints: BN,
    amountWithdrawn: BN,
}

export type  StakerDetail = {
    staked: number | string,
    unstaked: number | string,
    startDate: string | number,
    endDate: string | number,
    reward: string | number,
    withdrawTimestamp: string | number,
}


export type StakingInfo = {
    token: PublicKey,
    symbol: string,
    decimals: number,
    countStaker : number,
    maxStakingAmount: number,
    currentTotalStake: number,
    unstakingPeriod: number , 
    pause: boolean,
    totalRewardsDistributed: number | string,
    apy: number | string,
}
