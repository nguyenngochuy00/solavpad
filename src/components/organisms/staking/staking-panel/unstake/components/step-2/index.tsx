import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../../../../../constants';
import { useSolBalance } from '../../../../../../../hooks/useState';
import { AppState } from '../../../../../../../redux/rootReducer';
import { formatNumberDownRound } from '../../../../../../../services/helpers';
import { WalletInfo } from '../../../../../../../types/ido.type';
import SolCheckpoints from '../../../../../common/checkpoints';
import SolStakingStep from '../../../../../common/staking-step';
import './index.scss';

interface SolStakingStakeStep2Props {
	stakingSymbol?: string;
	paymentSymbol?: string;
	paymentNetwork?: string;
	stakeable?: boolean;
	confirmedStake?: boolean;
	onConfirmStake: (checked: boolean) => void;
}

const SolStakingUnstakeStep2 = ({
	confirmedStake,
	onConfirmStake,
    stakingSymbol = '',
	paymentSymbol = '',
	paymentNetwork = '',
    stakeable=false
}: SolStakingStakeStep2Props) => {
	const walletInfo = useSelector(
		(state: AppState) => state.application.walletInfo
	);

    const balanceToken = useSelector((state: AppState) => state.staking.currentBalanceValue)
    const solBal = useSolBalance();
	return (
		<SolStakingStep
			title="Checkpoints"
			description="The following conditions must be met to proceed:"
			confirm={
				<>
					<input
						type="checkbox"
						checked={confirmedStake}
						onChange={e => onConfirmStake(e.target.checked)}
					/>
					<span>
						I have read the{' '}
						<Link to={APP_ROUTES.SUPPORTS.url || ''}>Terms and Conditions</Link>
					</span>
				</>
			}
			className="sol-staking-stake-step1"
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
						checked: balanceToken,
						title: `Have an active Solana stake`,
						description: `You currently have ${formatNumberDownRound(
							balanceToken
						)} staked`
					},
					{
						checked: solBal,
						title: `BNB available in wallet`,
						description: `${paymentSymbol} is required to pay transaction fees on the ${paymentNetwork} network. ${paymentSymbol} Balance: ${formatNumberDownRound(
							solBal
						)}`
					},
					{
						checked: stakeable,
						title: 'Eligible to initiate unstake',
						description: `You cannot unstake if you already have an active ${stakingSymbol} unstake/withdrawal request`
					}
				]}
			/>
		</SolStakingStep>
	);
};
export default SolStakingUnstakeStep2;
