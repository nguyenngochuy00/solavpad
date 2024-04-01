import { PublicKey } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";

const STAKING_SEEDS = "YO_STAKING";
const REWARD_SEED = "YO_REWARD";
const USER_STAKING_SEED = "USER_STAKING";


class StakingFindPDA {

    getUserStakingPda = (program: any, pad: PublicKey, user: PublicKey) => {
        const [idoPDAs, _] = PublicKey.findProgramAddressSync(
            [anchor.utils.bytes.utf8.encode(USER_STAKING_SEED),
            pad.toBuffer(),
            user.toBuffer(),],
            program.programId
        );
        return idoPDAs;
    }

    getPdaStaking = (program: any) => {
        const [idoPDAs, _] = PublicKey.findProgramAddressSync(
            [anchor.utils.bytes.utf8.encode(STAKING_SEEDS)],
            program.programId
        );
        return idoPDAs;
    }

    getPdaReward = (program: any) => {
        const [idoPDAs, _] = PublicKey.findProgramAddressSync(
            [anchor.utils.bytes.utf8.encode(REWARD_SEED)],
            program.programId
        );
        return idoPDAs;
    };
}

export const stakingFindPda = new StakingFindPDA();
