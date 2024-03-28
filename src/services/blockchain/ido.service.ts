import { Connection, Signer, PublicKey, Transaction, TransactionSignature, ConfirmOptions, Commitment, SendOptions, SystemProgram } from "@solana/web3.js";
import { ConnectionContextState } from '@solana/wallet-adapter-react';
import crowdFundingIDL from '../idl/crowdfunding.json';

import {
	AnchorProvider,
	web3,
	utils,
	BN,
	Provider,
	Program
} from '@project-serum/anchor';
import { JoinIdoParams } from '../../types/ido.type';
import { IdoFindPda } from '../helpers';
import {
    getAssociatedTokenAddress,
    createMint,
    TOKEN_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID,
    getAccount,
    getOrCreateAssociatedTokenAccount,
    getAssociatedTokenAddressSync,
  } from "@solana/spl-token"

const programIdoID = new PublicKey(crowdFundingIDL.metadata.address)
const opts = {
    preflightCommitment: "processed",
    commitment: "processed",
  } as ConfirmOptions
export class IdoWeb3Service {


	async joinIdo(connection: ConnectionContextState, param: JoinIdoParams) {
        try {
            const provider = this.getProvider(connection.connection);
            const {amount, contractAddress, raiseTokenMint, wallet} = param;
            const contractPubkey = new PublicKey(contractAddress);
            const mint = new PublicKey(raiseTokenMint);
            const userPDA = IdoFindPda.getPdaUser(programIdoID, contractPubkey, new PublicKey(wallet));
            const userTokenAccount = getAssociatedTokenAddressSync(mint, new PublicKey(wallet), true);
            const idoTokenAccount = getAssociatedTokenAddressSync(mint, contractPubkey, true);
            const amountBN = new BN(amount).mul(new BN(10 ** 9));


            console.log("idoTokenAccount: ", idoTokenAccount.toString());
            
    
            const program = this.getIdoProgram(provider);
            const transaction = await program.methods.participate(amountBN).accounts({
              idoAccount: contractAddress,
              userPdaAccount: userPDA,
              user: wallet,
              userTokenAccount: userTokenAccount,
              idoTokenAccount: idoTokenAccount,
              tokenProgram: TOKEN_PROGRAM_ID,
              systemProgram: SystemProgram.programId
            }).rpc();
            // connection.connection.sendTransaction(transaction, [window.solana]).then((res) => { console.log(res) });

        //   let tx = await  window.solana.signAndSendTransaction(transaction)
            console.log("joinIDO success at transaction: ", transaction);
        } catch (error) {
            console.log("joinIDO error: ", error);
        }
       

    }
    async claim() {

    }

     private getIdoProgram(connection: ConnectionContextState) {
        //@ts-ignore
        return new Program(crowdFundingIDL, programIdoID, connection);
    }
     getProvider = (connection: any) =>{
        return new AnchorProvider(connection, window.solana, opts);
      }
}
export const idoService = new IdoWeb3Service();


