import { get } from 'lodash';
import { useSelector } from 'react-redux';

export const useSolBalance = () => {
	return useSelector(state => get(state, 'system.walletInfo.solBalance', 0));
};

export const useBlockLatest = () => {
	return useSelector(state => get(state, 'system.blockNumber', 0));
}
