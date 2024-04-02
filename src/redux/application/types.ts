export const SET_LATEST_BLOCK_NUMBER = 'SET_LATEST_BLOCK_NUMBER';

export const SET_KMT_BALANCE = 'SET_KMT_BALANCE';
export const SET_USDT_BALANCE = 'SET_USDT_BALANCE';

export const TOGGLE_CONNECT_WALLET = 'TOGGLE_CONNECT_WALLET';
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const UPDATE_BREADCRUMBS = 'UPDATE_BREADCRUMBS';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const UPDATE_WALLET_INFO = 'UPDATE_WALLET_INFO';


export interface ApplicationState {
	total: number;
	onDay: number;
	darkMode: boolean;
	breadcrumbs: { text: string; url?: string; active?: boolean }[];
	showConnectWallet: boolean;
	sidebarExpaned: boolean;
	walletInfo: any;
	blockNumber: number;
}
