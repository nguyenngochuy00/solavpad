import { createReducer } from '@reduxjs/toolkit';
import {
	getLaunchpadDetail,
	getLaunchpadDetailFail,
	getLaunchpadDetailSuccess,
	getWalletInfor,
	getWalletInforFail,
	getWalletInforSuccess
} from './actions';
import { LauchpadDetailState } from './types';

const initialState: LauchpadDetailState = {
	launchpad: undefined,
	walletInfor: undefined,
	isLoading: false
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
		});
});

export default launchpadDetailReducer;
