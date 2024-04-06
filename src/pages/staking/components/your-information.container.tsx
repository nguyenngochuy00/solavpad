// import SolStakingYourInformation from "src/components/organisms/staking/your-information";

import { useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import SolStakingYourInformation from '../../../components/organisms/staking/your-information';
import { AppState } from '../../../redux/rootReducer';
import { stakingWeb3Utils } from '../../../services/blockchain';
import { formatNumberDownRound } from '../../../services/helpers';
import { StakerDetail } from '../../../types/staking.type';
import { getStakeDetail } from '../redux/actions';

const SolStakingYourInformationContainer: React.FC = () => {
	const { publicKey } = useWallet();
	const dispatch = useDispatch();

	const stakeDetail = useSelector(
		(state: AppState) => state.staking.stakeDetail
	);

	useEffect(() => {
		if (publicKey) dispatch(getStakeDetail(publicKey));
	}, [publicKey]);


	const handleStake = () => {};

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
