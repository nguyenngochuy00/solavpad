import { toast } from 'react-toastify';
import { put, select, takeLatest } from 'redux-saga/effects';
import { AppState } from '../../../redux/rootReducer';
import { getProjectDetailById } from '../../../redux/services/project';
import { idoService, solaUtils } from '../../../services/blockchain';
import { ProjectDetail } from '../../../types';
import {
	ClaimTokenIdoParams,
	JoinIdoParams,
	WalletInfo
} from '../../../types/ido.type';
import {
	claimToken,
	claimTokenFail,
	claimTokenSuccess,
	getLaunchpadDetail,
	getLaunchpadDetailFail,
	getLaunchpadDetailSuccess,
	getWalletInfor,
	getWalletInforFail,
	getWalletInforSuccess,
	joinPool,
	joinPoolFail,
	joinPoolSuccess
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

function* handleJoinPool(action: ReturnType<typeof joinPool>) {
	try {
		const state: AppState = yield select();
		const result: {
			status: boolean;
			data?: string;
			message?: string;
		} = yield idoService.joinIdo(
			action.payload.connection,
			action.payload.anchorWallet,
			{
				amount: action.payload.amount, //doing sua lai amount cho dung
				contractAddress: action.payload.contractAddress,
				raiseTokenMint: action.payload.raiseTokenMint,
				wallet: action.payload.wallet
			} as JoinIdoParams
		);

		if (result.status && result.data) {
			yield put(joinPoolSuccess(result.data));
			yield put(
				getLaunchpadDetail(String(state.launchpadDetail.launchpad?.id))
			);
		} else {
			const notifyTransaction = () => toast.error('Join pool fail!!');
			notifyTransaction();
			yield put(joinPoolFail());
		}
	} catch (error) {
		const notifyTransaction = () => toast.error('Join pool fail!!');
		notifyTransaction();
		yield put(joinPoolFail());
		console.error('Error fetching data:', error);
	}
}

function* handleClaimToken(action: ReturnType<typeof claimToken>) {
	try {
		const state: AppState = yield select();
		const result: {
			status: boolean;
			data?: string;
			message?: string;
		} = yield idoService.claim(
			action.payload.connection,
			action.payload.anchorWallet,
			{
				index: action.payload.index, //doing sua lai amount cho dung
				contractAddress: action.payload.contractAddress,
				wallet: action.payload.wallet
			} as ClaimTokenIdoParams
		);

		if (result.status && result.data) {
			yield put(claimTokenSuccess(result.data));
			yield put(
				getLaunchpadDetail(String(state.launchpadDetail.launchpad?.id))
			);
		} else {
			const notifyTransaction = () => toast.error('Claim fail!!');
			notifyTransaction();
			yield put(claimTokenFail());
		}
	} catch (error) {
		const notifyTransaction = () => toast.error('Claim fail!!');
		notifyTransaction();
		yield put(claimTokenFail());
		console.error('Error fetching data:', error);
	}
}

function* lunchpadDetailSaga() {
	yield takeLatest(getLaunchpadDetail.type, handleGetLaunchpadDetail);
	yield takeLatest(getWalletInfor.type, handleGetWalletInfor);
	yield takeLatest(joinPool.type, handleJoinPool);
	yield takeLatest(claimToken.type, handleClaimToken);
}

export default lunchpadDetailSaga;
