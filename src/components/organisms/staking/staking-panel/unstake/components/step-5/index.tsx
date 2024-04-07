import { useSelector } from 'react-redux';
import { AppState } from '../../../../../../../redux/rootReducer';
import { hideWalletAddress } from '../../../../../../../services/helpers';
import SolStakingStep from '../../../../../common/staking-step';
import './index.scss';

const SolStakingUnstakeStep5 = ({
	stakingSymbol
}: {
	stakingSymbol: string;
}) => {
	const transactions = useSelector(
		(state: AppState) => state.staking.transaction
	);
	const transactionLink = (transaction: string) =>
		`https://explorer.solana.com/tx/${transaction}?cluster=devnet`;
	return (
		<SolStakingStep
			title="Successfully!"
			description={
				<>
					<p className="transaction-link c-white">
						Congratulations! <br />
						You have completed the <b>{stakingSymbol}</b> staking process.
					</p>
					<p className="sol-staking-step-highlight">
						Please check Solana to see if the transaction was successful.
					</p>
					<a
						className="transaction-link c-white"
						href={transactionLink(transactions)}
						target="_blank"
						rel="noopener noreferrer"
						title={transactions}
					>
						Transaction: [<span>{hideWalletAddress(transactions)}</span>]
						confirmed!
					</a>
				</>
			}
			className="sol-staking-stake-step5"
		></SolStakingStep>
	);
};
export default SolStakingUnstakeStep5;
