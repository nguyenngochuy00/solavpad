import { AnchorWallet, ConnectionContextState } from "@solana/wallet-adapter-react";
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
import { stakingFindPda } from "../helpers";
import { config } from "../../_config";

const programStakingID = new PublicKey(stakingIdl.metadata.address)
const opts = {
    preflightCommitment: "processed",
    commitment: "processed",
  } as ConfirmOptions

  let token_staking_decimals = 9;
export class StackingService {


    async stakerDeposit(connection: ConnectionContextState,  anchorWallet: AnchorWallet,  amount: number){

        try {
            let amountDecimal = (amount*10**token_staking_decimals);

            const program = this.getStakingProgram(connection, anchorWallet);
    
            const stakingContractPda = stakingFindPda.getPdaStaking(program);
    
    
            const tokenMint =  new PublicKey(config.SOLVPAD_TOKEN_MINT);
            const userStakingPda = stakingFindPda.getUserStakingPda(program, stakingContractPda, anchorWallet.publicKey);
            const rewardPda = stakingFindPda.getPdaReward(program);
                  
            const transaction = await program.methods.stakerDeposit(new BN(amountDecimal.toString())).accounts({
                tokenMint: tokenMint,
                userStakingAccount: userStakingPda,
                stakingContractAccount: stakingContractPda,
                userTokenAccount: getAssociatedTokenAddressSync(tokenMint, new PublicKey(anchorWallet.publicKey), true),
                stakingTokenAccount: getAssociatedTokenAddressSync(tokenMint, stakingContractPda, true),
                rewardContractAccount: rewardPda,
                rewardTokenAccount: getAssociatedTokenAddressSync(tokenMint, rewardPda, true),
                authority: anchorWallet.publicKey,
                systemProgram: SystemProgram.programId,
                tokenProgram: TOKEN_PROGRAM_ID,
            }).rpc();
            
            console.log("Your transaction signature", transaction);
            return {
                status: true,
                message: "success",
                data: transaction
            }  
        } catch (error: any) {
            return {
                status: false,
                message: error.message,
            } 
        }

        
    }


    async stakerInitWithdraw(connection: ConnectionContextState, anchorWallet: AnchorWallet, amount: number){

        try {
            const program = this.getStakingProgram(connection, anchorWallet);
            const stakingContractPda = stakingFindPda.getPdaStaking(program);
            const rewardPda = stakingFindPda.getPdaReward(program);
    
            const userStakingPda = stakingFindPda.getUserStakingPda(program, stakingContractPda, anchorWallet.publicKey);
    
            let amountDecimal = amount * 10 ** token_staking_decimals ;
    
            const tx = await program.methods.initiateWithdrawal(new BN(amountDecimal)).accounts({
              userStakingAccount: userStakingPda,
              stakingContractAccount: stakingContractPda,
              rewardContractAccount: rewardPda,
              authority: anchorWallet.publicKey,
              systemProgram: SystemProgram.programId,
            }).rpc(); 
            return {
                status: true,
                message: "success",
                data: tx
            }  
        } catch (error: any) {
            return {
                status: false,
                message: error.message,
            }  
        }  
    }

    async stakerExecuteWithdraw(connection: ConnectionContextState, anchorWallet: AnchorWallet){
        try {
            const program = this.getStakingProgram(connection, anchorWallet);
            const stakingContractPda = stakingFindPda.getPdaStaking(program);
            const rewardPda = stakingFindPda.getPdaReward(program);
    
            const userStakingPda = stakingFindPda.getUserStakingPda(program, stakingContractPda, anchorWallet.publicKey);
    
            const tx = await program.methods.executeWithdrawal().accounts({
              userStakingAccount: userStakingPda,
              stakingContractAccount: stakingContractPda,
              rewardContractAccount: rewardPda,
              stakingTokenAccount: getAssociatedTokenAddressSync(new PublicKey(config.SOLVPAD_TOKEN_MINT), stakingContractPda, true),
              rewardTokenAccount: getAssociatedTokenAddressSync(new PublicKey(config.SOLVPAD_TOKEN_MINT), rewardPda, true),
              authority: anchorWallet.publicKey,
              tokenProgram: TOKEN_PROGRAM_ID,
              systemProgram: SystemProgram.programId,
            }).rpc();
            return {
                status: true,
                message: "success",
                data: tx
            }  
        } catch (error: any) {
            return {
                status: false,
                message: error.message,
            }  
        }  
    }

    async stakerWithdrawReward(connection: ConnectionContextState, anchorWallet: AnchorWallet){
        try {
            const program = this.getStakingProgram(connection, anchorWallet);
            const stakingContractPda = stakingFindPda.getPdaStaking(program);
            const rewardPda = stakingFindPda.getPdaReward(program);
    
            const userStakingPda = stakingFindPda.getUserStakingPda(program, stakingContractPda, anchorWallet.publicKey);
    
            const tx = await program.methods.withdrawReward().accounts({
              userStakingAccount: userStakingPda,
              stakingContractAccount: stakingContractPda,
              rewardContractAccount: rewardPda,
              userTokenAccount: getAssociatedTokenAddressSync(new PublicKey(config.SOLVPAD_TOKEN_MINT), new PublicKey(anchorWallet.publicKey), true),
              rewardTokenAccount: getAssociatedTokenAddressSync(new PublicKey(config.SOLVPAD_TOKEN_MINT), rewardPda, true),
              authority: anchorWallet.publicKey,
              tokenProgram: TOKEN_PROGRAM_ID,
              systemProgram: SystemProgram.programId,
            }).rpc();
            return {
                status: true,
                message: "success",
                data: tx
            }  
        } catch (error: any) {
            return {
                status: false,
                message: error.message,
            }  
        }  
    }


    private getStakingProgram(connection: ConnectionContextState, anchorWallet: AnchorWallet) {
        const provider = this._getProvider(connection, anchorWallet);
        //@ts-ignore
        return new Program(stakingIdl, programStakingID, provider);
    }
    private _getProvider = (connection: ConnectionContextState, anchorWallet: AnchorWallet) =>{
        return new AnchorProvider(connection.connection, anchorWallet, opts);
    }
    
}


export const stakeService = new StackingService();