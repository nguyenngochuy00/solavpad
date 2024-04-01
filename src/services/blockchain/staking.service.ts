import { ConnectionContextState } from "@solana/wallet-adapter-react";
import {  PublicKey, ConfirmOptions, SystemProgram } from "@solana/web3.js";
import stakingIdl from '../idl/solpad_staking.json';
import {
    TOKEN_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID,
    getAssociatedTokenAddressSync,
  } from "@solana/spl-token"
import {
	AnchorProvider,
	BN,
	Program
} from '@project-serum/anchor';
import { DepositStakingParams } from "../../types/staking.type";
import { stakingFindPda } from "../helpers";

const programStakingID = new PublicKey(stakingIdl.metadata.address)
const opts = {
    preflightCommitment: "processed",
    commitment: "processed",
  } as ConfirmOptions
export class StackingService {


    async stakerDeposit(connection: ConnectionContextState, param: DepositStakingParams){

        const provider = this._getProvider(connection.connection);
        const {amount, tokenMint, wallet} = param;

        const amountBN = new BN(amount).mul(new BN(10 ** 9));

        const stakingContractPda = stakingFindPda.getPdaStaking(programStakingID);
        const userStakingPda = stakingFindPda.getUserStakingPda(programStakingID, stakingContractPda, wallet);
        const rewardPda = stakingFindPda.getPdaReward(programStakingID);
        
        const mint = new PublicKey(tokenMint);
        const program = this.getStakingProgram(provider);
        const transaction = await program.methods.stakerDeposit(amountBN).accounts({
            tokenMint: tokenMint,
            userStakingAccount: userStakingPda,
            stakingContractAccount: stakingContractPda,
            userTokenAccount: getAssociatedTokenAddressSync(mint, new PublicKey(wallet), true),
            stakingTokenAccount: getAssociatedTokenAddressSync(mint, stakingContractPda, true),
            rewardContractAccount: rewardPda,
            rewardTokenAccount: getAssociatedTokenAddressSync(mint, rewardPda, true),
            authority: provider.wallet.publicKey,
            systemProgram: SystemProgram.programId,
            tokenProgram: TOKEN_PROGRAM_ID,
        }).rpc();

        console.log("Your transaction signature", transaction);
    }

    private getStakingProgram(connection: ConnectionContextState) {
        //@ts-ignore
        return new Program(stakingIdl, programStakingID, connection);
    }
    private _getProvider = (connection: any) =>{
        return new AnchorProvider(connection, window.solana, opts);
    }
    
}