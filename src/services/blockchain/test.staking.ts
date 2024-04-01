//@ts-nocheck
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";

import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SOLANA_SCHEMA,
  Signer,
  SystemProgram,
} from "@solana/web3.js";
import {
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddressSync,
} from "@solana/spl-token"


const STAKING_SEEDS = "YO_STAKING";
const REWARD_SEED = "YO_REWARD";
const USER_STAKING_SEED = "USER_STAKING";
const OWNER_ROLE_SEED = "OWNER_ROLE";
const PAUSER_ROLE_SEED = "PAUSER_ROLE";
const REWARDS_DISTRIBUTOR_ROLE_SEED = "REWARDS_DISTRIBUTOR_ROLE";

let token_mint = new PublicKey("8xRoWyiPKGzqWPwh81HAGaytxzy6bEgN58Uh7LiHvMru");

const getPdaStaking = (program: any) => {
  const [idoPDAs, _] = PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode(STAKING_SEEDS)],
    program.programId
  );
  return idoPDAs;
};

const getUserStakingPda = (program: any, pad: PublicKey, user: PublicKey)=>{
  const [idoPDAs, _] = PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode(USER_STAKING_SEED), 
      pad.toBuffer(),
      user.toBuffer(),],
    program.programId
  );
  return idoPDAs;

}

const getPdaReward = (program: any) => {
  const [idoPDAs, _] = PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode(REWARD_SEED)],
    program.programId
  );
  return idoPDAs;
};
const getPdaAuth = (
  program: any,
  seed_role: string,
  stakingContract: PublicKey
) => {
  const [idoPDAs, _] = PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode(seed_role), stakingContract.toBuffer()],
    program.programId
  );
  return idoPDAs;
};
describe("solpad-staking", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());
  const provider = anchor.AnchorProvider.env();

  const program = anchor.workspace.SolpadStaking as Program<SolpadStaking>;
  let stakingPda = getPdaStaking(program);
  let ownerRoleAccount = getPdaAuth(program, OWNER_ROLE_SEED, stakingPda);
  let pauseRoleAccount = getPdaAuth(program, PAUSER_ROLE_SEED, stakingPda);
  let rewardPda = getPdaReward(program);


  let rewardAccountRole = getPdaAuth( program, REWARDS_DISTRIBUTOR_ROLE_SEED, rewardPda);


      
    it("user_deposit", async () => {
      let token_mint = new PublicKey("8xRoWyiPKGzqWPwh81HAGaytxzy6bEgN58Uh7LiHvMru");
  
      let userStakingPda =  getUserStakingPda(program, stakingPda, provider.wallet.publicKey);
      console.log("userStakingPda:", userStakingPda.toString() );
      
      const tokenStakingAccount =  getAssociatedTokenAddressSync(token_mint, stakingPda , true);
      const tokenRewardAccount =  getAssociatedTokenAddressSync(token_mint, rewardPda , true);

      const userTokenAccount = getAssociatedTokenAddressSync(token_mint, provider.wallet.publicKey, true);

      // let old_userInfo = await program.account.userStakingDepositAccount.fetch(userStakingPda);
  
      // const oldAmout = old_userInfo.amountDeposit;
      let amount = new BN(1*LAMPORTS_PER_SOL)
        try {
          // Add your test here.
          const tx = await program.methods
            .stakerDeposit(amount)
            .accounts({
              tokenMint: token_mint,
              userStakingAccount: userStakingPda,
              stakingContractAccount: stakingPda,
              userTokenAccount: userTokenAccount,
              stakingTokenAccount: tokenStakingAccount,
              rewardContractAccount: rewardPda,
              rewardTokenAccount: tokenRewardAccount,
              authority: provider.wallet.publicKey,
              systemProgram: SystemProgram.programId,
              tokenProgram: TOKEN_PROGRAM_ID,
  
            })
            .rpc();
    
            console.log("Your transaction signature", tx);
  
        } catch (error) {
          console.log(error);
        }
   

        let _rewardInfo = await program.account.rewardStakingContract.fetch(rewardPda);

        console.log(JSON.stringify(_rewardInfo));
        let userInfo = await program.account.userStakingDepositAccount.fetch(userStakingPda);
        console.log("====================================");

        console.log(JSON.stringify(userInfo));

        let stakingInfo = await program.account.swapStakingContract.fetch(stakingPda);

        console.log("====================================");
        console.log(JSON.stringify(stakingInfo));
  
        // assert.equal(userInfo.amountDeposit.toNumber(), amount.add(oldAmout).toNumber(), "deposit staking error");

    });

    it("initiate_withdrawal", async () => {
      let token_mint = new PublicKey("8xRoWyiPKGzqWPwh81HAGaytxzy6bEgN58Uh7LiHvMru");
  
      let userStakingPda =  getUserStakingPda(program, stakingPda, provider.wallet.publicKey);
  
      let withdraw_amount = new BN(1*LAMPORTS_PER_SOL)
        try {
          // Add your test here.
          const tx = await program.methods
            .initiateWithdrawal(withdraw_amount)
            .accounts({
              userStakingAccount: userStakingPda,
              stakingContractAccount: stakingPda,
              rewardContractAccount: rewardPda,
              authority: provider.wallet.publicKey,
              systemProgram: SystemProgram.programId,
  
            })
            .rpc();
    
            console.log("Your transaction signature", tx);
  
        } catch (error) {
          console.log(error);
        }

    });
    
    it("execute_withdrawal", async () => {
      let token_mint = new PublicKey("8xRoWyiPKGzqWPwh81HAGaytxzy6bEgN58Uh7LiHvMru");
        const tokenStakingAccount =  getAssociatedTokenAddressSync(token_mint, stakingPda , true);
      const tokenRewardAccount =  getAssociatedTokenAddressSync(token_mint, rewardPda , true);

      const userTokenAccount = getAssociatedTokenAddressSync(token_mint, provider.wallet.publicKey, true);

      let userStakingPda =  getUserStakingPda(program, stakingPda, provider.wallet.publicKey);
      let old_userInfo = await program.account.userStakingDepositAccount.fetch(userStakingPda);
        try {
          // Add your test here.
          const tx = await program.methods
            .executeWithdrawal()
            .accounts({
              userStakingAccount: userStakingPda,
              stakingContractAccount: stakingPda,
              rewardContractAccount: rewardPda,
              userTokenAccount: userTokenAccount,
              stakingTokenAccount: tokenStakingAccount,
              rewardTokenAccount: tokenRewardAccount,
              authority: provider.wallet.publicKey,
              tokenProgram: TOKEN_PROGRAM_ID,
              systemProgram: SystemProgram.programId,
            })
            .rpc();
            let userInfo = await program.account.userStakingDepositAccount.fetch(userStakingPda);


            console.log("Your transaction signature", tx);
  
        } catch (error) {
          console.log(error);
        }

    });


    


    it("withdraw_reward", async () => {
      let token_mint = new PublicKey("8xRoWyiPKGzqWPwh81HAGaytxzy6bEgN58Uh7LiHvMru");
      const tokenStakingAccount =  getAssociatedTokenAddressSync(token_mint, stakingPda , true);
      const tokenRewardAccount =  getAssociatedTokenAddressSync(token_mint, rewardPda , true);

      const userTokenAccount = getAssociatedTokenAddressSync(token_mint, provider.wallet.publicKey, true);

      let userStakingPda =  getUserStakingPda(program, stakingPda, provider.wallet.publicKey);
      let old_userInfo = await program.account.userStakingDepositAccount.fetch(userStakingPda);
      console.log(JSON.stringify(old_userInfo));
      
        try {
          // Add your test here.
          const tx = await program.methods
            .withdrawReward()
            .accounts({
              stakingContractAccount: stakingPda,
              userStakingAccount: userStakingPda,
              rewardContractAccount: rewardPda,
              userTokenAccount: userTokenAccount,
              rewardTokenAccount: tokenRewardAccount,
              authority: provider.wallet.publicKey,
              tokenProgram: TOKEN_PROGRAM_ID,
              systemProgram: SystemProgram.programId,
            })
            .rpc();
            let userInfo = await program.account.userStakingDepositAccount.fetch(userStakingPda);
            console.log(JSON.stringify(userInfo));
            

            console.log("Your transaction signature", tx);
  
        } catch (error) {
          console.log(error);
        }

    });
});


