// import SolStakingYourInformation from "src/components/organisms/staking/your-information";

import { useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { useEffect, useState } from 'react';
import SolStakingYourInformation from '../../../components/organisms/staking/your-information';
import { stakingWeb3Utils } from '../../../services/blockchain';
import { StakerDetail } from '../../../types/staking.type';

const SolStakingYourInformationContainer: React.FC = () => {
	const { publicKey } = useWallet();

	const [stakedValue, setStakedValue] = useState<string>('');
	const [unstakedValue, setUnstakedValue] = useState<string>('');
	const [rewardsValue, setRewardsValue] = useState<string>('');
	useEffect(() => {
		if (publicKey) {
			stakingWeb3Utils
				.getStakeDetails(
					new PublicKey('Hv6634qu7ucXkaHDgcH3H5fUH1grmSNwpspYdCkSG7hK'),
					publicKey
				)
				.then((value: StakerDetail) => {
					setStakedValue(String(value.startDate));
					setUnstakedValue(String(value.endDate));
					setRewardsValue(String(value.reward));
				});
		}
	}, [publicKey]);

	const handleStake = () => {};

	const handleWithdraw = () => {};

	return (
		<SolStakingYourInformation
			staked={stakedValue}
			unstaked={unstakedValue}
			rewards={rewardsValue}
			symbol="USDB"
			onStake={handleStake}
			onWithdraw={handleWithdraw}
		/>
	);
};
export default SolStakingYourInformationContainer;
