import { createAction } from '@reduxjs/toolkit';
import {
	SET_LATEST_BLOCK_NUMBER,
	TOGGLE_CONNECT_WALLET,
	TOGGLE_DARK_MODE,
	TOGGLE_SIDEBAR,
	UPDATE_BREADCRUMBS,
	UPDATE_WALLET_INFO,
	UPDATE_IDO_PROGRAM_INFO
} from './types';

export const setLastBlockNumber = createAction<number>(SET_LATEST_BLOCK_NUMBER);

export const toggleDarkMode = createAction<boolean>(TOGGLE_DARK_MODE);

export const toggleConnectWallet = createAction<boolean>(TOGGLE_CONNECT_WALLET);

export const toggleSidebar = createAction<boolean>(TOGGLE_SIDEBAR);

export const updateBreadcrumbs = createAction<{
	text: string;
	url?: string;
	active?: boolean;
}[]>(UPDATE_BREADCRUMBS);

export const updateWalletInfo = createAction<any>(UPDATE_WALLET_INFO);

export const updateIdoProgramInfo = createAction<any>(UPDATE_IDO_PROGRAM_INFO);

