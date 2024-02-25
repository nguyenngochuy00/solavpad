import { SET_LATEST_BLOCK_NUMBER, TOGGLE_CONNECT_WALLET } from '../types/application';

const initialState = {
    total: 0,
    onDay: 0,
    showConnectWallet: false
};

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return {
                ...state,
            };
    }
};
export default applicationReducer;
