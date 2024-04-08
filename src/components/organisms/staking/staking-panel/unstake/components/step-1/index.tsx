import SolStakingStep from '../../../../../common/staking-step';
import './index.scss';

const SolStakingUnstakeStep1 = () => {
	return (
		<SolStakingStep
			isWarning
			description={
				<p className="text-left">
					After Unstaking, you must wait 7 days before you can withdraw your
					SOLPAD and reward. <br /> <div className="mt-3"></div> The amount of
					tokens you Unstake will not count towards your tier level for
					upcomming project
				</p>
			}
			className="sol-staking-unstake-step1"
		></SolStakingStep>
	);
};
export default SolStakingUnstakeStep1;
