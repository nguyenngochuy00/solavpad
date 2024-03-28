
import { BN } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
export interface WalletInfo {
    tier: number, 
    tierName: string, 
    round: number, 
    roundState: number, 
    roundStateText: string, 
    roundTimestamp: number,
    userParticipation: number | string,
    remainingAllocation: number | string,
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
    contractAddress: PublicKey,
    amount: BN,
    raise_token_mint: PublicKey,
    wallet: PublicKey,
}