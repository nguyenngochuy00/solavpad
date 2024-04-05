import { createAction } from '@reduxjs/toolkit';
import { PublicKey } from '@solana/web3.js';
import {
	GET_STAKE_DETAIL_ACTION_FAIL,
	GET_STAKE_DETAIL_ACTION_REQUEST,
	GET_STAKE_DETAIL_ACTION_SUCCESS,
	STAKE_DEPOSITE_ACTION_FAIL,
	STAKE_DEPOSITE_ACTION_REQUEST,
	STAKE_DEPOSITE_ACTION_SUCCESS
} from './types';

export const stakeDeposite = createAction(STAKE_DEPOSITE_ACTION_REQUEST);
export const stakeDepositeSuccess = createAction<string>(
	STAKE_DEPOSITE_ACTION_SUCCESS
);
export const stakeDepositeFail = createAction(STAKE_DEPOSITE_ACTION_FAIL);

export const getStakeDetail = createAction<PublicKey>(
	GET_STAKE_DETAIL_ACTION_REQUEST
);
export const getStakeDetailSuccess = createAction<{
	staked: number;
	unstaked: number;
	reward: number;
}>(GET_STAKE_DETAIL_ACTION_SUCCESS);
export const getStakeDetailFail = createAction(GET_STAKE_DETAIL_ACTION_FAIL);
