import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../../../../../constants';
import SolCheckpoints from '../../../../../common/checkpoints';
import SolStakingStep from '../../../../../common/staking-step';
// import SolCheckpoints from 'src/components/organisms/common/checkpoints';
// import SolStakingStep from 'src/components/organisms/common/staking-step';
// import { APP_ROUTES } from 'src/constants';

interface SolStakingWithdrawStep1Props {
	walletInfo?: string;
	withdrawSymbol?: string;
	yourStakedAmount?: number;
	yourStakedRewards?: number;
	paymentBalance?: number;
	paymentSymbol?: string;
	confirmedWithdraw?: boolean;
	onConfirmWithdraw?: (confirmed: boolean) => void;
}

const SolStakingWithdrawStep1 = ({
	walletInfo,
	withdrawSymbol = '',
	yourStakedAmount = 0,
	yourStakedRewards = 0,
	paymentBalance = 0,
	paymentSymbol = '',
	confirmedWithdraw = false,
	onConfirmWithdraw = () => {}
}: SolStakingWithdrawStep1Props) => {
	return (
		<SolStakingStep
			title="Prerequisites"
			description="In order to move to the next step, we are automatically checking that the following conditions are met:"
			confirm={
				<>
					<input
						type="checkbox"
						checked={confirmedWithdraw}
						onChange={e => onConfirmWithdraw(e.target.checked)}
					/>
					<span>
						I have read the{' '}
						<Link to={APP_ROUTES.SUPPORTS.url || ''}>Terms and Conditions</Link>
					</span>
				</>
			}
			className="sol-staking-withdraw-step1"
		>
			<SolCheckpoints
				checkpoints={[
					{
						checked: walletInfo,
						title: 'Connected with MetaMask',
						description:
							'If not connected, click the "Connect Wallet" button in the top right corner'
					},
					{
						checked: yourStakedAmount && yourStakedRewards,
						title: `Staked ${yourStakedAmount} ${withdrawSymbol}`,
						description: `Your current rewards ${withdrawSymbol} stake: ${yourStakedRewards}`
					},
					{
						checked: paymentBalance,
						title: `${paymentSymbol} balance greater than 0`,
						description: `Only required for Binance Coin transaction fees`
					}
				]}
			/>
		</SolStakingStep>
	);
};
export default SolStakingWithdrawStep1;
