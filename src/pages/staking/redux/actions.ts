import { createAction } from '@reduxjs/toolkit';
import { PublicKey } from '@solana/web3.js';
import {
    CHECK_VALID_NEXT_ACTION_REQUEST,
    GET_BALANCE_VALUE_ACTION_FAIL,
    GET_BALANCE_VALUE_ACTION_REQUEST,
	GET_BALANCE_VALUE_ACTION_SUCCESS,
	GET_STAKE_DETAIL_ACTION_FAIL,
	GET_STAKE_DETAIL_ACTION_REQUEST,
	GET_STAKE_DETAIL_ACTION_SUCCESS,
	STAKE_DEPOSITE_ACTION_FAIL,
	STAKE_DEPOSITE_ACTION_REQUEST,
	STAKE_DEPOSITE_ACTION_SUCCESS,
    UNSTAKE_INIT_ACTION_FAIL,
    UNSTAKE_INIT_ACTION_REQUEST,
    UNSTAKE_INIT_ACTION_SUCCESS
} from './types';

export const stakeDeposite = createAction(STAKE_DEPOSITE_ACTION_REQUEST);
export const stakeDepositeSuccess = createAction<string>(
	STAKE_DEPOSITE_ACTION_SUCCESS
);
export const stakeDepositeFail = createAction(STAKE_DEPOSITE_ACTION_FAIL);

export const unstakeInit = createAction(UNSTAKE_INIT_ACTION_REQUEST);
export const unstakeInitSuccess = createAction<string>(
	UNSTAKE_INIT_ACTION_SUCCESS
);
export const unstakeInitFail = createAction(UNSTAKE_INIT_ACTION_FAIL);

export const checkIsValid = createAction<boolean>(CHECK_VALID_NEXT_ACTION_REQUEST);

export const getStakeDetail = createAction<PublicKey>(
	GET_STAKE_DETAIL_ACTION_REQUEST
);
export const getStakeDetailSuccess = createAction<{
	staked: number;
	unstaked: number;
	reward: number;
    withdrawTimestamp: number;
}>(GET_STAKE_DETAIL_ACTION_SUCCESS);
export const getStakeDetailFail = createAction(GET_STAKE_DETAIL_ACTION_FAIL);



export const getCurrentBalanceValue = createAction<PublicKey>(
	GET_BALANCE_VALUE_ACTION_REQUEST
);
export const getCurrentBalanceValueSuccess = createAction<number | string>(GET_BALANCE_VALUE_ACTION_SUCCESS);
export const getCurrentBalanceValueFail = createAction(GET_BALANCE_VALUE_ACTION_FAIL);
