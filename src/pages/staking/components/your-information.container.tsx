// import SolStakingYourInformation from "src/components/organisms/staking/your-information";

import SolStakingYourInformation from '../../../components/organisms/staking/your-information';

const SolStakingYourInformationContainer: React.FC = () => {
	const handleStake = () => {};

	const handleWithdraw = () => {};

	return (
		<SolStakingYourInformation
			staked="0.0000"
			unstaked="0.0000"
			rewards="0.0000"
			symbol="USDB"
			onStake={handleStake}
			onWithdraw={handleWithdraw}
		/>
	);
};
export default SolStakingYourInformationContainer;
