import { PublicKey } from "@solana/web3.js";
import { utils, } from '@project-serum/anchor';
import * as anchor from "@coral-xyz/anchor";

const AUTHORITY_IDO = "ido_pad";
const AUTHORITY_ADMIN = "admin_ido";
const AUTHORITY_USER = "wl_ido_pad";

class IDOFindPDA {

    getPdaAdmin = (programId: PublicKey, ido_pda: PublicKey) => {

        const [idoPDAs, _] = PublicKey.findProgramAddressSync(
            [
                utils.bytes.utf8.encode(AUTHORITY_ADMIN),
                ido_pda.toBuffer(),
            ],
            programId);
        return idoPDAs;
    }

    getPdaIdo = (programId: PublicKey, ido_id: number) => {
        let idoIdBuff = new anchor.BN(ido_id);
        const [idoPDAs, _] = PublicKey.findProgramAddressSync(
            [
                Buffer.from(AUTHORITY_IDO),
                idoIdBuff.toBuffer("le", 8),
            ],
            programId);
        return idoPDAs;
    }

    getPdaUser = (programId: PublicKey, idoPDA: PublicKey, user: PublicKey) => {
        const [idoPDAs, _] = PublicKey.findProgramAddressSync(
            [
                utils.bytes.utf8.encode(AUTHORITY_USER),
                idoPDA.toBuffer(),
                user.toBuffer(),

            ],
            programId);
        return idoPDAs;
    }
}

export const IdoFindPda = new IDOFindPDA();
