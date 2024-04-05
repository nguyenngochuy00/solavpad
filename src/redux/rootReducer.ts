import { combineReducers } from 'redux';
import launchpadDetailReducer from '../pages/launchpad-detail/redux/reducer';
import { LauchpadDetailState } from '../pages/launchpad-detail/redux/types';
import stakingReducer from '../pages/staking/redux/reducer';
import { StakingState } from '../pages/staking/redux/types';
import applicationReducer from './application/reducer';
import { ApplicationState } from './application/types';

export type AppState = {
	launchpadDetail: LauchpadDetailState;
	staking: StakingState;
	application: ApplicationState;
};

const rootReducers = combineReducers({
	launchpadDetail: launchpadDetailReducer,
	staking: stakingReducer,
	application: applicationReducer
});

export default rootReducers;
