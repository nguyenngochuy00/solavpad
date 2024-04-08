// import SolStakingYourInformation from "src/components/organisms/staking/your-information";

import {
	useAnchorWallet,
	useConnection,
	useWallet
} from '@solana/wallet-adapter-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import SolStakingYourInformation from '../../../components/organisms/staking/your-information';
import { AppState } from '../../../redux/rootReducer';
import { stakeService } from '../../../services/blockchain';
import { formatNumberDownRound } from '../../../services/helpers';
import {
	getStakeDetail,
	implementWithdraw,
	implementWithdrawFail
} from '../redux/actions';

const SolStakingYourInformationContainer: React.FC = () => {
	const { publicKey } = useWallet();
	const dispatch = useDispatch();
	const connection = useConnection();
	const anchorWallet = useAnchorWallet();

	const stakeDetail = useSelector(
		(state: AppState) => state.staking.stakeDetail
	);

	useEffect(() => {
		if (publicKey) dispatch(getStakeDetail(publicKey));
	}, [publicKey]);

	const handleStake = () => {
		if (anchorWallet) {
			dispatch(implementWithdraw());
			stakeService
				.stakerWithdrawReward(connection, anchorWallet)
				.then(result => {
					if (result.status && result.data && publicKey) {
						dispatch(implementWithdrawFail());
						dispatch(getStakeDetail(publicKey));
					} else {
						const notifyTransaction = () => toast.success('Withdraw fail!');
                        dispatch(implementWithdrawFail());
                        notifyTransaction();
					}
				}).catch((error) => {
					console.log(error);
					const notifyTransaction = () => toast.success('Withdraw fail!');
					dispatch(implementWithdrawFail());
					notifyTransaction();
				});
		}
	};

	const handleWithdraw = () => {};

	return (
		<SolStakingYourInformation
			staked={String(formatNumberDownRound(stakeDetail.staked))}
			unstaked={String(formatNumberDownRound(stakeDetail.unstaked))}
			rewards={String(formatNumberDownRound(stakeDetail.reward))}
			withdrawTimestamp={stakeDetail.withdrawTimestamp}
			symbol="USDB"
			onStake={handleStake}
			onWithdraw={handleWithdraw}
		/>
	);
};
export default SolStakingYourInformationContainer;
