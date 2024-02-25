import { SET_LATEST_BLOCK_NUMBER, TOGGLE_CONNECT_WALLET } from '../types/application';

export const setLastBlockNumber = (payload) => ({
    type: SET_LATEST_BLOCK_NUMBER,
    payload
});

export const toggleConnectWallet = (payload) => ({
    type: TOGGLE_CONNECT_WALLET,
    payload
});