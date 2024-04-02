import { all } from 'redux-saga/effects';
import lunchpadDetailSaga from '../pages/launchpad-detail/redux/saga';

function* rootSaga() {
	yield all([
		lunchpadDetailSaga()
		// Add other sagas here
	]);
}

export default rootSaga;
