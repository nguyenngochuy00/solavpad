import { ProjectDetail } from "../../../types";
import { WalletInfo } from "../../../types/ido.type";

export interface LauchpadDetailState {
	launchpad?: ProjectDetail;
	isLoading: boolean;
	walletInfor?: WalletInfo
}


export const GET_LAUNCHPAD_DETAIL_ACTION_REQUEST = "GET_LAUNCHPAD_DETAIL_ACTION_REQUEST";
export const GET_LAUNCHPAD_DETAIL_ACTION_SUCCESS = "GET_LAUNCHPAD_DETAIL_ACTION_SUCCESS";
export const GET_LAUNCHPAD_DETAIL_ACTION_FAIL = "GET_LAUNCHPAD_DETAIL_ACTION_FAIL";

export const GET_WALLET_INFOR_ACTION_REQUEST = "GET_WALLET_INFOR_ACTION_REQUEST";
export const GET_WALLET_INFOR_ACTION_SUCCESS = "GET_WALLET_INFOR_ACTION_SUCCESS";
export const GET_WALLET_INFOR_ACTION_FAIL = "GET_WALLET_INFOR_ACTION_FAIL";