import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../../../../../constants';
import { useSolBalance } from '../../../../../../../hooks/useState';
import { AppState } from '../../../../../../../redux/rootReducer';
import { formatNumberDownRound } from '../../../../../../../services/helpers';
import { WalletInfo } from '../../../../../../../types/ido.type';
import SolCheckpoints from '../../../../../common/checkpoints';
import SolStakingStep from '../../../../../common/staking-step';
// import SolCheckpoints from 'src/components/organisms/common/checkpoints';
// import SolStakingStep from 'src/components/organisms/common/staking-step';
// import { APP_ROUTES } from 'src/constants';

interface SolStakingStakeStep1Props {
	walletInfo?: WalletInfo;
	stakingSymbol?: string;
	paymentSymbol?: string;
	paymentNetwork?: string;
	stakeable?: boolean;
	confirmedStake?: boolean;
	onConfirmStake: (checked: boolean) => void;
}

const SolStakingStakeStep1 = ({
	walletInfo,
	stakingSymbol,
	paymentSymbol,
	paymentNetwork,
	stakeable = false,
	confirmedStake = false,
	onConfirmStake
}: SolStakingStakeStep1Props) => {
	const solBal = useSolBalance();
	const balanceToken = useSelector((state: AppState) => state.staking.currentBalanceValue)

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
						title: `${stakingSymbol} available to deposit`,
						description: `Current Balance: ${formatNumberDownRound(balanceToken)}`
					},
					{
						checked: solBal,
						title: `${paymentSymbol} available in wallet`,
						description: `${paymentSymbol} is required to pay transaction fees on the ${paymentNetwork} network. ${paymentSymbol} Balance: ${formatNumberDownRound(solBal)}`
					},
					{
						checked: stakeable,
						title: 'Eligible to stake',
						description: `You cannot stake if you have an active ${stakingSymbol} unstake/withdrawal request`
					}
				]}
			/>
		</SolStakingStep>
	);
};
export default SolStakingStakeStep1;
