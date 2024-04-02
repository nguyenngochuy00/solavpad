import { PublicKey } from "@solana/web3.js"
import { BN } from '@project-serum/anchor';


export type StakingInfo = {
    pause: boolean,
    decimal?: number,
    count_staker: number,
    unstaking_period: number,
    max_staking_amount: BN,
    current_total_stake: BN,
    token: PublicKey,
}

export type UserStakingDepositAccount = {
    startDate: BN,
    endDate: BN,
    initiateDate:BN,
    amountDeposit: BN,
    entryRewardPoints: BN,
    exitRewardPoints: BN,
    amountWithdrawn: BN,
}

export type DepositStakingParams = {
    amount: number,
    wallet: PublicKey,
}

