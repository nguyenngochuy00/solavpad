import SolStakingStep from '../../../../../common/staking-step';
import './index.scss';

const SolStakingUnstakeStep4 = () => {
	return (
		<SolStakingStep
			title="Confirm Unstaking Process"
			description={
				<p className="text-left">
					In this step, you initiate the unstaking process. After a 7 day
					waiting period, you will be allowed to withdraw your Solana
				</p>
			}
			className="sol-staking-unstake-step1"
		></SolStakingStep>
	);
};
export default SolStakingUnstakeStep4;
