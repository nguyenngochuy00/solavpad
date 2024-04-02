import { put, takeLatest } from 'redux-saga/effects';
import { getProjectDetailById } from '../../../redux/services/project';
import { solaUtils } from '../../../services/blockchain';
import { ProjectDetail } from '../../../types';
import { WalletInfo } from '../../../types/ido.type';
import {
	getLaunchpadDetail,
	getLaunchpadDetailFail,
	getLaunchpadDetailSuccess,
	getWalletInfor,
	getWalletInforFail,
	getWalletInforSuccess
} from './actions';

function* handleGetLaunchpadDetail(
	action: ReturnType<typeof getLaunchpadDetail>
) {
	try {
		const data: ProjectDetail = yield getProjectDetailById(action.payload);
		yield put(getLaunchpadDetailSuccess(data));
	} catch (error) {
		yield put(getLaunchpadDetailFail());
		console.error('Error fetching data:', error);
	}
}

function* handleGetWalletInfor(action: ReturnType<typeof getWalletInfor>) {
	try {
		if (!action.payload.projectContract || !action.payload.publicKey) return;
		const result: WalletInfo = yield solaUtils.getWalletInfo(
			action.payload.projectContract,
			action.payload.publicKey
		);
        yield put(getWalletInforSuccess(result));
	} catch (error) {
		yield put(getWalletInforFail());
		console.error('Error fetching data:', error);
	}
}

function* lunchpadDetailSaga() {
	yield takeLatest(getLaunchpadDetail.type, handleGetLaunchpadDetail);
	yield takeLatest(getWalletInfor.type, handleGetWalletInfor);
}

export default lunchpadDetailSaga;
