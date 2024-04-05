import { all } from 'redux-saga/effects';
import lunchpadDetailSaga from '../pages/launchpad-detail/redux/saga';
import StakingSaga from '../pages/staking/redux/saga';

function* rootSaga() {
	yield all([
		lunchpadDetailSaga(),
		StakingSaga(),
		// Add other sagas here
	]);
}

export default rootSaga;
