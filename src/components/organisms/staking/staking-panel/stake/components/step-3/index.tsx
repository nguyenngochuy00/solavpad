// import SolProgressBar from "src/components/molecules/progress-bar";
// import SolStakingStep from 'src/components/organisms/common/staking-step';
import SolProgressBar from '../../../../../../molecules/progress-bar';
import SolStakingStep from '../../../../../common/staking-step';

interface SolStakingStakeStep3Props {
	stakeAmount?: number;
	stakingSymbol?: string;
	stakeLoadingPercent?: number;
}

const SolStakingStakeStep3 = ({
	stakeAmount,
	stakingSymbol,
	stakeLoadingPercent
}: SolStakingStakeStep3Props) => {
	return (
		<SolStakingStep
			title="Pre-authorization"
			description={
				<>
					<p>
						<small>
							<i>(1st of 2 transactions required.)</i>
						</small>
					</p>
					<p>
						First transaction is the Pre-authorization step, where you allow
						staking contract to access your tokens upto the provided amount.
					</p>
					<p>
						You will be asked to confirm that allow the smart contract to have
						access to{' '}
						<b>
							{stakeAmount} {stakingSymbol}
						</b>{' '}
						from your wallet.
					</p>
					<p>
						<SolProgressBar percent={stakeLoadingPercent} />
					</p>
					<p className="sol-staking-step-highlight">
						Please wait for the web3 wallet transaction to complete before any
						other action.
					</p>
				</>
			}
			className="sol-staking-stake-step3"
		></SolStakingStep>
	);
};
export default SolStakingStakeStep3;
