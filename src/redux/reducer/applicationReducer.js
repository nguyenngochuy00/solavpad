import { SET_LATEST_BLOCK_NUMBER, TOGGLE_CONNECT_WALLET, TOGGLE_DARK_MODE, UPDATE_BREADCRUMBS } from '../types/application';

const initialState = {
    total: 0,
    onDay: 0,
    darkMode: true,
    breadcrumbs: [{ text: 'Homepage', url: '/', active: true }],
    showConnectWallet: false
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
                ...action.payload
            };
        case TOGGLE_CONNECT_WALLET:
            return {
                ...state,
                showConnectWallet: action.payload
            };
        case UPDATE_BREADCRUMBS:
            return {
                ...state,
                breadcrumbs: action.payload
            };

        default:
            return {
                ...state,
            };
    }
};
export default applicationReducer;
