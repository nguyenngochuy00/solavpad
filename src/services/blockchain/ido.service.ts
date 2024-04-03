import {  PublicKey, ConfirmOptions, SystemProgram } from "@solana/web3.js";
import { AnchorWallet, ConnectionContextState } from '@solana/wallet-adapter-react';
import crowdFundingIDL from '../idl/crowdfunding.json';

import {
	AnchorProvider,
	BN,
	Program
} from '@project-serum/anchor';
import { ClaimTokenIdoParams, JoinIdoParams } from '../../types/ido.type';
import { IdoFindPda } from '../helpers';
import {
    TOKEN_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID,
    getAssociatedTokenAddressSync,
  } from "@solana/spl-token"
import { solaUtils } from "./ido.web3";

const programIdoID = new PublicKey(crowdFundingIDL.metadata.address)
const opts = {
    preflightCommitment: "processed",
    commitment: "processed",
  } as ConfirmOptions
export class IdoWeb3Service {


	async joinIdo(connection : ConnectionContextState, anchorWallet: AnchorWallet, param: JoinIdoParams) {
        try {
            
        
            const provider = this._getProvider(connection, anchorWallet);
            
            const {amount, contractAddress, raiseTokenMint, wallet} = param;
            const contractPubkey = new PublicKey(contractAddress);
            const mint = new PublicKey(raiseTokenMint);
          

            const idoPdaData = await solaUtils.getPdaIdoAccount(contractPubkey);
            if(!idoPdaData)
                return {
                    status: false,
                    message: "idoPdaData not found"
                };
           
            const decimals = idoPdaData?.raiseTokenDecimals || 9;

            const amountBN = new BN(amount).mul(new BN(10 ** decimals));

           
        
    
            const program = this.getIdoProgram(provider);
            
            const transaction = await program.methods.participate(amountBN).accounts({
              idoAccount: contractAddress,
              userPdaAccount: IdoFindPda.getPdaUser(programIdoID, contractPubkey, new PublicKey(wallet)),
              user: wallet,
              userTokenAccount:  getAssociatedTokenAddressSync(mint, new PublicKey(wallet), true),
              idoTokenAccount: getAssociatedTokenAddressSync(mint, contractPubkey, true),
              tokenProgram: TOKEN_PROGRAM_ID,
              systemProgram: SystemProgram.programId
            }).rpc();

            console.log("joinIDO success at transaction: ", transaction);
            return {
                status: true,
                message: "success",
            }

        } catch (error: any) {
            console.log("joinIDO error: ", error);
            return {
                status: false,
                message: error.message,
            }
        }
    }

    async claim(connection : ConnectionContextState, anchorWallet: AnchorWallet, param: ClaimTokenIdoParams) {

        try {
            const provider = this._getProvider(connection, anchorWallet);
            const { contractAddress,  wallet, index} = param;
            const contractPubkey = new PublicKey(contractAddress);
            const idoPdaData = await solaUtils.getPdaIdoAccount(contractPubkey);
            if(!idoPdaData)
                return {
                    status: false,
                    message: "idoPdaData not found"
                };
    
            const releaseTokenMint = idoPdaData?.releaseToken;
            if(!releaseTokenMint)
                return {
                    status: false,
                    message: "releaseTokenMint not found"
            };
    
            const mint = new PublicKey(releaseTokenMint);
    
            const program = this.getIdoProgram(provider);
            const transaction = await program.methods.claim(index).accounts({
              idoAccount: contractAddress,
              userPdaAccount: IdoFindPda.getPdaUser(programIdoID, contractPubkey, new PublicKey(wallet)),
              idoTokenAccount: getAssociatedTokenAddressSync(mint, contractPubkey, true),
              userTokenAccount: getAssociatedTokenAddressSync(mint, new PublicKey(wallet), true),
              user: wallet,
              tokenMint: mint,
              tokenProgram: TOKEN_PROGRAM_ID,
              associatedTokenProgram:  ASSOCIATED_TOKEN_PROGRAM_ID,
              systemProgram: SystemProgram.programId
            }).rpc();
            console.log("claim success at transaction: ", transaction);
            return {
                status: true,
                message: "success",
            }  
        } catch (error: any) {
           console.log("claim error: ", error);
              return {
                status: false,
                message: error.message,
              }
            
        }
        
    }

    private getIdoProgram(provider: AnchorProvider) {
   
        //@ts-ignore
        return new Program(crowdFundingIDL, programIdoID, provider);
    }
    private _getProvider = (connection: ConnectionContextState, anchorWallet : AnchorWallet) =>{

        return new AnchorProvider(connection.connection, anchorWallet, opts);
    }

}
export const idoService = new IdoWeb3Service();


