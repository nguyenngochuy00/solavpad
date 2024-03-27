
import { BN } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
export interface WalletInfo {
    tier: number, tierName: String, round :number, roundState :number, roundStateText: string, roundTimestamp: number
}

export interface UserStraitPda {
    address: PublicKey, //16
    tierIndex: number, //1
    allocated: boolean, //1
    participateAmount: BN, //16
    claimAmount: BN, //16
    owner: PublicKey,//32
}

// const allocation = {allocation:{}}
// const fcfsPrepare = {fcfsPrepare:{}}
// const fcfs = {fcfs:{}}

export const RoundClassMap = {
	allocation :"allocation",
	fcfsPrepare : "fcfsPrepare",
	fcfs: "fcfs",
}