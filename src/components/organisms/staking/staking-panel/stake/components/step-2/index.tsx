// import SolStakingStep from 'src/components/organisms/common/staking-step';
import SolStakingStep from '../../../../../common/staking-step';
import './index.scss';

interface SolStakingStakeStep2Props {
	stakeAmount?: number;
	stakingSymbol?: string;
	onStakeAmountChange?: (amount: number) => void;
}

const SolStakingStakeStep2 = ({
	stakeAmount = 0,
	stakingSymbol,
	onStakeAmountChange
}: SolStakingStakeStep2Props) => {
	const handleStakeAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const amount = parseFloat(e.target.value);
		onStakeAmountChange?.(amount);
	};

	return (
		<SolStakingStep
			title="How much do you want to stake?"
			description={`Please enter the amount of ${stakingSymbol} you want to stake`}
			className="sol-staking-stake-step2"
		>
			<input
				autoFocus
				type="number"
				className="sol-staking-stake-input"
				placeholder="0.0000"
				min={0.0001}
				value={stakeAmount}
				onChange={handleStakeAmountChange}
			/>
			<div className="sol-staking-stake-balance">
				Your balance:{' '}
				<b>
					{stakeAmount} {stakingSymbol}
				</b>
			</div>
		</SolStakingStep>
	);
};
export default SolStakingStakeStep2;
