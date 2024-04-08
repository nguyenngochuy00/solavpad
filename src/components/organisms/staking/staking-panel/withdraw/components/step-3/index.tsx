import { useSelector } from 'react-redux';
import { AppState } from '../../../../../../../redux/rootReducer';
import { hideWalletAddress } from '../../../../../../../services/helpers';
import SolStakingStep from '../../../../../common/staking-step';
import './index.scss';

interface SolStakingWithdrawStep3Props {
	withdrawSymbol?: string;
}

const SolStakingWithdrawStep3 = ({
	withdrawSymbol
}: SolStakingWithdrawStep3Props) => {
	const transactions = useSelector(
		(state: AppState) => state.staking.transaction
	);
	const transactionLink = (transaction: string) =>
		`https://explorer.solana.com/tx/${transaction}?cluster=devnet`;
	return (
		<SolStakingStep
			title="Confirmed"
			isWarning
			description={
				<>
					<p>You have withdraw your SOLPAD tokens.</p>
					<p>If desired, you may check Solana to confirm the transaction.</p>
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
			className="sol-staking-withdraw-step3"
		></SolStakingStep>
	);
};
export default SolStakingWithdrawStep3;
