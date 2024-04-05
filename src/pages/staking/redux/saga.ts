import { PublicKey } from '@solana/web3.js';
import { put, takeLatest } from 'redux-saga/effects';
import { stakingWeb3Utils } from '../../../services/blockchain';
import { StakerDetail } from '../../../types/staking.type';
import {
	getStakeDetail,
	getStakeDetailFail,
	getStakeDetailSuccess,
	stakeDeposite,
	stakeDepositeSuccess
} from './actions';

function* handleStakeDeposite(action: ReturnType<typeof stakeDepositeSuccess>) {
	try {
		// yield put()
	} catch (error) {
		// yield put(stakeDepositeFail());
		// console.error('Error fetching data:', error);
	}
}

function* handleGetStakeDetail(action: ReturnType<typeof getStakeDetail>) {
	try {
		const result: StakerDetail = yield stakingWeb3Utils.getStakeDetails(
			new PublicKey('Hv6634qu7ucXkaHDgcH3H5fUH1grmSNwpspYdCkSG7hK'),
			action.payload
		);

		if (result) {
			yield getStakeDetailSuccess({
				reward: Number(result.reward),
				staked: Number(result.staked),
				unstaked: Number(result.unstaked)
			});
		}
	} catch (error) {
		yield put(getStakeDetailFail());
		console.error('Error fetching data:', error);
	}
}

function* StakingSaga() {
	yield takeLatest(stakeDepositeSuccess.type, handleStakeDeposite);
	yield takeLatest(getStakeDetail.type, handleGetStakeDetail);
}

export default StakingSaga;
