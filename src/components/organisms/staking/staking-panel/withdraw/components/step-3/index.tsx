import SolStakingStep from '../../../../../common/staking-step';
import './index.scss'

interface SolStakingWithdrawStep3Props {
	withdrawSymbol?: string;
}

const SolStakingWithdrawStep3 = ({
	withdrawSymbol
}: SolStakingWithdrawStep3Props) => {
	return (
		<SolStakingStep
			title="Confirmed"
			isWarning
			description={
				<>
					<p>You have withdraw your Solana tokens.</p>
					<p>
						If desired, you may check Binance Smart Chain to confirm the
						transaction.
					</p>
				</>
			}
			className="sol-staking-withdraw-step3"
		></SolStakingStep>
	);
};
export default SolStakingWithdrawStep3;
