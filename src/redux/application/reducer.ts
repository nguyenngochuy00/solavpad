import { createReducer } from '@reduxjs/toolkit';
import {
	setLastBlockNumber,
	toggleConnectWallet,
	toggleDarkMode,
	toggleSidebar,
	updateBreadcrumbs,
	updateWalletInfo
} from './actions';
import { ApplicationState } from './types';

const initialState: ApplicationState = {
	total: 0,
	onDay: 0,
	darkMode: true,
	breadcrumbs: [{ text: 'Homepage', url: '/', active: true }],
	showConnectWallet: false,
	sidebarExpaned: true,
	walletInfo: undefined,
	blockNumber: 0
};

const applicationReducer = createReducer(initialState, builder => {
	builder
		.addCase(toggleDarkMode, (state, action) => {
			state.darkMode = action.payload;
		})
		.addCase(setLastBlockNumber, (state, action) => {
			state.blockNumber = action.payload;
		})
		.addCase(toggleConnectWallet, (state, action) => {
			state.showConnectWallet = action.payload;
		})

		.addCase(toggleSidebar, (state, action) => {
			state.sidebarExpaned = action.payload;
		})

		.addCase(updateBreadcrumbs, (state, action) => {
			state.breadcrumbs = action.payload;
		})

		.addCase(updateWalletInfo, (state, action) => {
			state.walletInfo = action.payload;
		});
});
export default applicationReducer;
