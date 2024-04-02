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
import { DepositStakingParams, StakingInfo } from "../../types/staking.type";
import { stakingFindPda } from "../helpers";

const programStakingID = new PublicKey(stakingIdl.metadata.address)
const opts = {
    preflightCommitment: "processed",
    commitment: "processed",
  } as ConfirmOptions
export class StackingService {


    async stakerDeposit(connection: ConnectionContextState, param: DepositStakingParams){

        const provider = this._getProvider(connection.connection);
        const {amount, wallet} = param;

        const amountBN = new BN(amount).mul(new BN(10 ** 9));

        const program = this.getStakingProgram(provider);

        const stakingContractPda = stakingFindPda.getPdaStaking(programStakingID);

        const pdaStakingInfo  = await program.account.stakingAccount.fetch(stakingContractPda) as StakingInfo;

        const tokenMint =  pdaStakingInfo.token as PublicKey;


        const userStakingPda = stakingFindPda.getUserStakingPda(programStakingID, stakingContractPda, wallet);
        const rewardPda = stakingFindPda.getPdaReward(programStakingID);
              
        const transaction = await program.methods.stakerDeposit(amountBN).accounts({
            tokenMint: tokenMint,
            userStakingAccount: userStakingPda,
            stakingContractAccount: stakingContractPda,
            userTokenAccount: getAssociatedTokenAddressSync(tokenMint, new PublicKey(wallet), true),
            stakingTokenAccount: getAssociatedTokenAddressSync(tokenMint, stakingContractPda, true),
            rewardContractAccount: rewardPda,
            rewardTokenAccount: getAssociatedTokenAddressSync(tokenMint, rewardPda, true),
            authority: provider.wallet.publicKey,
            systemProgram: SystemProgram.programId,
            tokenProgram: TOKEN_PROGRAM_ID,
        }).rpc();

        console.log("Your transaction signature", transaction);
    }


    async stakerWithdraw(connection: ConnectionContextState, param: DepositStakingParams){

    }


    private getStakingProgram(connection: ConnectionContextState) {
        //@ts-ignore
        return new Program(stakingIdl, programStakingID, connection);
    }
    private _getProvider = (connection: any) =>{
        return new AnchorProvider(connection, window.solana, opts);
    }
    
}