
import { BN } from '@project-serum/anchor';
import { PublicKey, TokenAmount } from '@solana/web3.js';
import { IdoInfoType } from '.';
export interface WalletInfo {
    tier: number,
    tierName: string,
    round: number,
    roundState: number,
    roundStateText: string,
    roundTimestamp: number,
    userParticipation?: number | string,
    remainingAllocation?: number | string,
    tokenBalance?: number | string,
}

export interface UserStraitPda {
    address: PublicKey, //16
    tierIndex: number, //1
    allocated: boolean, //1
    participateAmount: BN, //16
    claimAmount: BN, //16
    owner: PublicKey,//32
}



export const RoundClassMap = {
    allocation: "allocation",
    fcfsPrepare: "fcfsPrepare",
    fcfs: "fcfs",
}

export type JoinIdoParams = {
    contractAddress: string,
    amount: string | number,
    raiseTokenMint: string,
    wallet: string,
}
export type GetInfoAllocationParams = {
    idoAccount: IdoInfoType,
    userPda: UserStraitPda,
    index: number,
    now_ts: number,
    releaseTokenAccount: TokenAmount,
}


export type AllocationWallet = {
    fromTimestamp: number;
    toTimestamp: number;
    percent: number
    claimable: number
    total: number
    claimed: number
    remaining: number
    status: number
}


export type InfoAllocationResult = {
    allocNumberList: Array<number|string>;
    allocAmountList: Array<number|string>;
    allocClaimedList: Array<number|string>;
    allocReleasedList: Array<number|string>;
    allocStatusList: Array<number|string>;
}

export type CalculateAllowInfoResult = {
    layout: number,
    infoAllocation: Array<AllocationItem>,
}
export enum claimStatus {
    "Not Claimed",
    "Claimed",
    "Released",

}

export type AllocationItem = {
    no: number | string,
    allocationAmount: number | string,
    timestamp: number | string,
    claimedAmount: number | string,
    status: string | number,
    percentage?: string |number | undefined,
}
