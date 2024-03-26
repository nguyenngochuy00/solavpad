import { SET_LATEST_BLOCK_NUMBER, TOGGLE_CONNECT_WALLET, TOGGLE_DARK_MODE, TOGGLE_SIDEBAR, UPDATE_BREADCRUMBS, UPDATE_WALLET_INFO } from '../types/application';

const initialState = {
    total: 0,
    onDay: 0,
    darkMode: true,
    breadcrumbs: [{ text: 'Homepage', url: '/', active: true }],
    showConnectWallet: false,
    sidebarExpaned: true,
    walletInfo: undefined,
    blockNumber: 0
};

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: action.payload
            };
        case SET_LATEST_BLOCK_NUMBER:
            return {
                ...state,
                blockNumber: action.payload
            };
        case TOGGLE_CONNECT_WALLET:
            return {
                ...state,
                showConnectWallet: action.payload
            };
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarExpaned: action.payload
            };
        case UPDATE_BREADCRUMBS:
            return {
                ...state,
                breadcrumbs: action.payload
            };
        case UPDATE_WALLET_INFO:
            return {
                ...state,
                walletInfo: action.payload
            };

        default:
            return {
                ...state,
            };
    }
};
export default applicationReducer;
