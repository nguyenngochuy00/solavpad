// import SolStakingStep from 'src/components/organisms/common/staking-step';

import SolStakingStep from '../../../../../common/staking-step';

interface SolStakingWithdrawStep3Props {
	withdrawSymbol?: string;
}

const SolStakingWithdrawStep3 = ({
	withdrawSymbol
}: SolStakingWithdrawStep3Props) => {
	return (
		<SolStakingStep
			title="Successfully!"
			description={
				<>
					<p>
						Congratulations!
						<br />
						You have completed the <b>{withdrawSymbol}</b> staking process.
					</p>
					<p className="sol-staking-step-highlight">
						Please check Binance to see if the transaction was successful.
					</p>
				</>
			}
			className="sol-staking-withdraw-step3"
		></SolStakingStep>
	);
};
export default SolStakingWithdrawStep3;
