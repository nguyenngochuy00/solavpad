import { PublicKey } from "@solana/web3.js"


export type DepositStakingParams = {
    amount: number,
    tokenMint: PublicKey,
    wallet: PublicKey,

}