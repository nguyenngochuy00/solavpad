import { SET_LATEST_BLOCK_NUMBER, TOGGLE_CONNECT_WALLET, TOGGLE_DARK_MODE, UPDATE_BREADCRUMBS } from '../types/application';

export const setLastBlockNumber = (payload) => ({
    type: SET_LATEST_BLOCK_NUMBER,
    payload
});

export const toggleDarkMode = (payload) => ({
    type: TOGGLE_DARK_MODE,
    payload
});

export const toggleConnectWallet = (payload) => ({
    type: TOGGLE_CONNECT_WALLET,
    payload
});

export const updateBreadcrumbs = (payload) => ({
    type: UPDATE_BREADCRUMBS,
    payload
});