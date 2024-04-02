import { get } from 'lodash';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/rootReducer';

export const useSolBalance = () => {
	return useSelector((state: AppState) => state.application.walletInfo?.solBalance);
};

export const useBlockLatest = () => {
	return useSelector((state: AppState) => state.application.blockNumber);
}
