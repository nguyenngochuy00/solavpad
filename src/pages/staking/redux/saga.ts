import { PublicKey } from '@solana/web3.js';
import { put, takeLatest } from 'redux-saga/effects';
import { solaUtils, stakingWeb3Utils } from '../../../services/blockchain';
import { StakerDetail } from '../../../types/staking.type';
import { config } from '../../../_config';
import {
    getCurrentBalanceValue,
	getCurrentBalanceValueFail,
	getCurrentBalanceValueSuccess,
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
		const result: StakerDetail = yield stakingWeb3Utils.getStakingWalletInfo(action.payload);
        
		if (result) {
			yield put(getStakeDetailSuccess({
				reward: Number(result.reward),
				staked: Number(result.staked),
				unstaked: Number(result.unstaked),
                withdrawTimestamp: Number(result.withdrawTimestamp)
			}));
		}
	} catch (error) {
		yield put(getStakeDetailFail());
		console.error('Error fetching data:', error);
	}
}


function* handleGetCurrentBalance(action: ReturnType<typeof getCurrentBalanceValue>) {
	try {
        const result: string = yield solaUtils.getBalanceOfToken(new PublicKey(config.SOLVPAD_TOKEN_MINT), action.payload)
        
		if (result) {
			yield put(getCurrentBalanceValueSuccess(result));
		}
	} catch (error) {
		yield put(getCurrentBalanceValueFail());
		console.error('Error fetching data:', error);
	}
}


function* StakingSaga() {
	yield takeLatest(stakeDepositeSuccess.type, handleStakeDeposite);
	yield takeLatest(getStakeDetail.type, handleGetStakeDetail);
    yield takeLatest(getCurrentBalanceValue.type, handleGetCurrentBalance);
}

export default StakingSaga;
