import { PublicKey } from "@solana/web3.js"
import { BN } from '@project-serum/anchor';


export type StakingAccountInfo = {
    pause: boolean,
    decimal?: number,
    countStaker: number,
    unStakingPeriod: number,
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
    startDate: string | number,
    endDate: string | number,
    reward: string | number,

}


