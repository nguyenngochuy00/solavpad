// import SolStakingStep from "src/components/organisms/common/staking-step";

import SolStakingStep from '../../../../../common/staking-step';

interface SolStakingStakeStep5Props {
	stakingSymbol?: string;
}

const SolStakingStakeStep5 = ({ stakingSymbol }: SolStakingStakeStep5Props) => {
	return (
		<SolStakingStep
			title="Successfully!"
			description={
				<>
					<p>
						Congratulations! <br />
						You have completed the <b>{stakingSymbol}</b> staking process.
					</p>
					<p className="sol-staking-step-highlight">
						Please check Binance to see if the transaction was successful.
					</p>
				</>
			}
			className="sol-staking-stake-step5"
		></SolStakingStep>
	);
};
export default SolStakingStakeStep5;
