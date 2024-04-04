import { createAction } from '@reduxjs/toolkit';
import { AnchorWallet, ConnectionContextState } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { ProjectDetail } from '../../../types';
import { WalletInfo } from "../../../types/ido.type";
import {
    CLAIM_TOKEN_ACTION_FAIL,
    CLAIM_TOKEN_ACTION_REQUEST,
	CLAIM_TOKEN_ACTION_SUCCESS,
	GET_LAUNCHPAD_DETAIL_ACTION_FAIL,
	GET_LAUNCHPAD_DETAIL_ACTION_REQUEST,
	GET_LAUNCHPAD_DETAIL_ACTION_SUCCESS,
    GET_WALLET_INFOR_ACTION_FAIL,
    GET_WALLET_INFOR_ACTION_REQUEST,
    GET_WALLET_INFOR_ACTION_SUCCESS,
    JOIN_POOL_ACTION_FAIL,
    JOIN_POOL_ACTION_REQUEST,
    JOIN_POOL_ACTION_SUCCESS
} from './types';

export const getLaunchpadDetail = createAction<string>(
	GET_LAUNCHPAD_DETAIL_ACTION_REQUEST
);
export const getLaunchpadDetailSuccess = createAction<ProjectDetail>(
	GET_LAUNCHPAD_DETAIL_ACTION_SUCCESS
);
export const getLaunchpadDetailFail = createAction(
	GET_LAUNCHPAD_DETAIL_ACTION_FAIL
);


export const getWalletInfor = createAction<{
    projectContract?: string;
    publicKey: PublicKey | null;
}>(
	GET_WALLET_INFOR_ACTION_REQUEST
);
export const getWalletInforSuccess = createAction<WalletInfo>(
	GET_WALLET_INFOR_ACTION_SUCCESS
);
export const getWalletInforFail = createAction(
	GET_WALLET_INFOR_ACTION_FAIL
);


export const joinPool = createAction<{
    amount: number,
    connection: ConnectionContextState,
    anchorWallet: AnchorWallet,
    contractAddress: string,
    raiseTokenMint: string,
    wallet: PublicKey
}>(
	JOIN_POOL_ACTION_REQUEST
);
export const joinPoolSuccess = createAction<string>(
	JOIN_POOL_ACTION_SUCCESS
);
export const joinPoolFail = createAction(
	JOIN_POOL_ACTION_FAIL
);



export const claimToken = createAction<{
    index: number,
    connection: ConnectionContextState,
    anchorWallet: AnchorWallet,
    contractAddress: string,
    wallet: PublicKey
}>(
	CLAIM_TOKEN_ACTION_REQUEST
);
export const claimTokenSuccess = createAction<string>(
	CLAIM_TOKEN_ACTION_SUCCESS
);
export const claimTokenFail = createAction(
	CLAIM_TOKEN_ACTION_FAIL
);