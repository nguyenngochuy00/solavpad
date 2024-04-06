import { createReducer } from '@reduxjs/toolkit';
import {
    getCurrentBalanceValue,
    getCurrentBalanceValueFail,
    getCurrentBalanceValueSuccess,
    getStakeDetail,
	getStakeDetailFail,
	getStakeDetailSuccess,
	stakeDeposite,
	stakeDepositeFail,
	stakeDepositeSuccess,
    unstakeInit,
    unstakeInitFail,
    unstakeInitSuccess
} from './actions';
import { StakingState } from './types';

const initialState: StakingState = {
	isLoading: false,
    isLoadingTransaction: false,
	transaction: '',
    currentBalanceValue: '',
    stakeDetail: {
        reward: 0,
        staked: 0,
        unstaked: 0,
        withdrawTimestamp: 0,
    }
};

const stakingReducer = createReducer(initialState, builder => {
	builder
		.addCase(stakeDeposite, (state, action) => {
			state.isLoadingTransaction = true;
		})
		.addCase(stakeDepositeSuccess, (state: StakingState, action) => {
			state.isLoadingTransaction = false;
			state.transaction = action.payload;
		})

		.addCase(stakeDepositeFail, (state: StakingState, action) => {
			state.isLoadingTransaction = false;
			state.transaction = '';
		}) 

        .addCase(unstakeInit, (state, action) => {
			state.isLoadingTransaction = true;
		})
		.addCase(unstakeInitSuccess, (state: StakingState, action) => {
			state.isLoadingTransaction = false;
			state.transaction = action.payload;
		})

		.addCase(unstakeInitFail, (state: StakingState, action) => {
			state.isLoadingTransaction = false;
			state.transaction = '';
		}) 


        .addCase(getStakeDetail, (state, action) => {
			state.isLoading = true;
		})
		.addCase(getStakeDetailSuccess, (state: StakingState, action) => {
			state.isLoading = false;
			state.stakeDetail = {
                ...action.payload
            };
		})

		.addCase(getStakeDetailFail, (state: StakingState, action) => {
			state.isLoading = false;
			state.stakeDetail = {
                reward: 0,
                staked: 0,
                unstaked: 0,
                withdrawTimestamp: 0,
            };
		}) 


        .addCase(getCurrentBalanceValue, (state, action) => {
			state.isLoading = true;
		})
		.addCase(getCurrentBalanceValueSuccess, (state: StakingState, action) => {
			state.isLoading = false;
			state.currentBalanceValue = action.payload
		})

		.addCase(getCurrentBalanceValueFail, (state: StakingState, action) => {
			state.isLoading = false;
			state.currentBalanceValue = ''
		})


});

export default stakingReducer;
