import { ProjectDetail } from "../../../types";
import { WalletInfo } from "../../../types/ido.type";

export interface LauchpadDetailState {
	launchpad?: ProjectDetail;
	isLoading: boolean;
	walletInfor?: WalletInfo;
	isJoinPoolSuccess: boolean;
	isClaimTokenSuccess: boolean;
	transaction: string
}


export const GET_LAUNCHPAD_DETAIL_ACTION_REQUEST = "GET_LAUNCHPAD_DETAIL_ACTION_REQUEST";
export const GET_LAUNCHPAD_DETAIL_ACTION_SUCCESS = "GET_LAUNCHPAD_DETAIL_ACTION_SUCCESS";
export const GET_LAUNCHPAD_DETAIL_ACTION_FAIL = "GET_LAUNCHPAD_DETAIL_ACTION_FAIL";

export const GET_WALLET_INFOR_ACTION_REQUEST = "GET_WALLET_INFOR_ACTION_REQUEST";
export const GET_WALLET_INFOR_ACTION_SUCCESS = "GET_WALLET_INFOR_ACTION_SUCCESS";
export const GET_WALLET_INFOR_ACTION_FAIL = "GET_WALLET_INFOR_ACTION_FAIL";


export const JOIN_POOL_ACTION_REQUEST = "JOIN_POOL_ACTION_REQUEST";
export const JOIN_POOL_ACTION_SUCCESS = "JOIN_POOL_ACTION_SUCCESS";
export const JOIN_POOL_ACTION_FAIL = "JOIN_POOL_ACTION_FAIL";

export const CLAIM_TOKEN_ACTION_REQUEST = "CLAIM_TOKEN_ACTION_REQUEST";
export const CLAIM_TOKEN_ACTION_SUCCESS = "CLAIM_TOKEN_ACTION_SUCCESS";
export const CLAIM_TOKEN_ACTION_FAIL = "CLAIM_ACTION_FAIL";