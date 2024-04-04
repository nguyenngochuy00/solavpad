import { createReducer } from '@reduxjs/toolkit';
import {
    claimToken,
    claimTokenFail,
    claimTokenSuccess,
    getLaunchpadDetail,
    getLaunchpadDetailFail,
    getLaunchpadDetailSuccess,
    getWalletInfor,
    getWalletInforFail,
    getWalletInforSuccess,
    joinPool,
    joinPoolFail,
    joinPoolSuccess
} from './actions';
import { LauchpadDetailState } from './types';

const initialState: LauchpadDetailState = {
	launchpad: undefined,
	walletInfor: undefined,
	isLoading: false,
	isJoinPoolSuccess: false,
	isClaimTokenSuccess: false,
	transaction: ''
};

const launchpadDetailReducer = createReducer(initialState, builder => {
	builder
		.addCase(getLaunchpadDetail, (state, action) => {
			state.isLoading = true;
		})
		.addCase(
			getLaunchpadDetailSuccess,
			(state: LauchpadDetailState, action) => {
				state.isLoading = true;
				state.launchpad = action.payload;
			}
		)
		.addCase(getLaunchpadDetailFail, (state: LauchpadDetailState, action) => {
			state.isLoading = true;
		})

		.addCase(getWalletInfor, (state, action) => {
			state.isLoading = true;
		})
		.addCase(getWalletInforSuccess, (state: LauchpadDetailState, action) => {
			state.isLoading = true;
			state.walletInfor = action.payload;
		})
		.addCase(getWalletInforFail, (state: LauchpadDetailState, action) => {
			state.isLoading = true;
		})

		.addCase(joinPool, (state, action) => {
			state.isLoading = true;
		})
		.addCase(joinPoolSuccess, (state: LauchpadDetailState, action) => {
            debugger
			state.isLoading = false;
			state.isJoinPoolSuccess = true;
			state.transaction = action.payload;
		})
		.addCase(joinPoolFail, (state: LauchpadDetailState, action) => {
			state.isLoading = false;
			state.isJoinPoolSuccess = false;
			state.transaction = '';
		})

		.addCase(claimToken, (state, action) => {
			state.isLoading = true;
		})
		.addCase(claimTokenSuccess, (state: LauchpadDetailState, action) => {
			state.isLoading = false;
			state.isClaimTokenSuccess = true;
			state.transaction = action.payload;
		})
		.addCase(claimTokenFail, (state: LauchpadDetailState, action) => {
			state.isLoading = false;
			state.isClaimTokenSuccess = false;
			state.transaction = '';
		});
});

export default launchpadDetailReducer;
