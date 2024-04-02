import { combineReducers } from 'redux';
import launchpadDetailReducer from '../pages/launchpad-detail/redux/reducer';
import { LauchpadDetailState } from '../pages/launchpad-detail/redux/types';
import applicationReducer from './application/reducer';
import { ApplicationState } from './application/types';

export type AppState = {
	launchpadDetail: LauchpadDetailState;
	application: ApplicationState;
};

const rootReducers = combineReducers({
	launchpadDetail: launchpadDetailReducer,
	application: applicationReducer
});

export default rootReducers;
