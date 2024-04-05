import { createReducer } from '@reduxjs/toolkit';
import {
    getStakeDetail,
	getStakeDetailFail,
	getStakeDetailSuccess,
	stakeDeposite,
	stakeDepositeFail,
	stakeDepositeSuccess
} from './actions';
import { StakingState } from './types';

const initialState: StakingState = {
	isLoading: false,
    isLoadingTransaction: false,
	transaction: '',
    stakeDetail: {
        reward: 0,
        staked: 0,
        unstaked: 0,
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
            };
		}) 


});

export default stakingReducer;
