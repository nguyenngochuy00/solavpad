import { createAction } from '@reduxjs/toolkit';
import { PublicKey } from '@solana/web3.js';
import { ProjectDetail } from '../../../types';
import { WalletInfo } from "../../../types/ido.type";
import {
	GET_LAUNCHPAD_DETAIL_ACTION_FAIL,
	GET_LAUNCHPAD_DETAIL_ACTION_REQUEST,
	GET_LAUNCHPAD_DETAIL_ACTION_SUCCESS,
    GET_WALLET_INFOR_ACTION_FAIL,
    GET_WALLET_INFOR_ACTION_REQUEST,
    GET_WALLET_INFOR_ACTION_SUCCESS
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
