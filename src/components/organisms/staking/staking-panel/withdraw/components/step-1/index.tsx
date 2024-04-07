import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../../../../../constants';
import { useSolBalance } from '../../../../../../../hooks/useState';
import { checkIsValid } from '../../../../../../../pages/staking/redux/actions';
import { AppState } from '../../../../../../../redux/rootReducer';
import SolCheckpoints from '../../../../../common/checkpoints';
import SolStakingStep from '../../../../../common/staking-step';

interface SolStakingWithdrawStep1Props {
	withdrawSymbol?: string;
	yourStakedAmount?: number;
	yourStakedRewards?: number;
	paymentBalance?: number;
	paymentSymbol?: string;
	confirmedWithdraw?: boolean;
	onConfirmWithdraw?: (confirmed: boolean) => void;
}

const SolStakingWithdrawStep1 = ({
	withdrawSymbol = '',
	yourStakedAmount = 0,
	yourStakedRewards = 0,
	paymentSymbol = '',
	confirmedWithdraw = false,
	onConfirmWithdraw
}: SolStakingWithdrawStep1Props) => {
	const dispatch = useDispatch();
	const walletInfo = useSelector(
		(state: AppState) => state.application.walletInfo
	);

	const stakeDetail = useSelector(
		(state: AppState) => state.staking.stakeDetail
	);
	const handleChangeConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
		onConfirmWithdraw?.(event.target.checked);
	};

	const solBal = useSolBalance();

	useEffect(() => {
		if (
			walletInfo &&
			stakeDetail.withdrawTimestamp <=
				Number(parseInt(String(Date.now() / 1000))) &&
			solBal &&
			stakeDetail.unstaked && confirmedWithdraw
		) {
			dispatch(checkIsValid(true));
		} else {
			dispatch(checkIsValid(false));
		}
	}, [confirmedWithdraw, walletInfo, stakeDetail, solBal]);
	
	return (
		<SolStakingStep
			title="Prerequisites"
			description="In order to move to the next step, we are automatically checking that the following conditions are met:"
			confirm={
				<>
					<input
						type="checkbox"
						checked={confirmedWithdraw}
						onChange={handleChangeConfirm}
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
						checked:
							stakeDetail.withdrawTimestamp <=
							Number(parseInt(String(Date.now() / 1000))),
						title: `7 day waiting period elapsed`,
						description: ``
					},
					{
						checked: solBal,
						title: `${paymentSymbol} available in wallet`,
						description: `BNB is required to pay transaction fees on the Binance Smart Chain network.`
					},

					{
						checked: stakeDetail.unstaked,
						title: `You have Unstaked your Solana`,
						description: ``
					}
				]}
			/>
		</SolStakingStep>
	);
};
export default SolStakingWithdrawStep1;
