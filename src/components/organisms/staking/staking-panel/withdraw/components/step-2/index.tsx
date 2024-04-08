// import SolStakingStep from "src/components/organisms/common/staking-step"

import SolStakingStep from '../../../../../common/staking-step';

const SolStakingWithdrawStep2 = () => {
	return (
		<SolStakingStep
			title="Confirm Withdrawal"
			description={
				'In this step, you complete the transaction that withdraws your SOLPAD tokens.'
			}
			className="sol-staking-withdraw-step2"
		></SolStakingStep>
	);
};
export default SolStakingWithdrawStep2;
