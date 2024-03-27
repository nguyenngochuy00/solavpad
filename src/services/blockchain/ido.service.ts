import { PublicKey, SystemProgram } from '@solana/web3.js';
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
export class IdoService {


	joinIdo(connection: ConnectionContextState, param: JoinIdoParams) {
        const {amount, contractAddress, raise_token_mint, wallet} = param;
        const userPDA = IdoFindPda.getPdaUser(programIdoID, contractAddress, raise_token_mint);
        const sourceAccount = getAssociatedTokenAddressSync(raise_token_mint, wallet, true);
        const desAccount = getAssociatedTokenAddressSync(raise_token_mint, contractAddress, true);


        const program = this.getIdoProgram(connection);
        const tx =   program.methods.participate(amount).accounts({
          idoAccount: contractAddress,
          userPdaAccount: userPDA,
          user: wallet,
          depositTokenAccount: sourceAccount,
          receiveTokenAccount: desAccount,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId
        }).rpc();
        console.log("joinIDO success at tx: ", tx);

    }

     getIdoProgram(connection: ConnectionContextState) {
            //@ts-ignore
        return new Program(crowdFundingIDL, programIdoID, connection);
    }
}
export const idoService = new IdoService();


