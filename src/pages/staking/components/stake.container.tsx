import {
	useAnchorWallet,
	useConnection,
	useWallet
} from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import SolStakingStake from '../../../components/organisms/staking/staking-panel/stake';
import { AppState } from '../../../redux/rootReducer';
import { stakeService } from '../../../services/blockchain';
import {
	getCurrentBalanceValue,
	getStakeDetail,
	stakeDeposite,
	stakeDepositeFail,
	stakeDepositeSuccess
} from '../redux/actions';

const SolStakingStakeContainer = () => {
	const STEPS = [
		{ step: 1, text: 'Checkpoints' },
		{ step: 2, text: 'Amount to Stake' },
		// { step: 3, text: 'Pre-authorization' },
		{ step: 3, text: 'Confirm' },
		{ step: 4, text: 'Confirmation' }
	];
	const [currentStep, setCurrentStep] = useState<number>(1);
	const [stakeAmount, setStakeAmount] = useState<number>(1);
	const walletInfo = useSelector(
		(state: AppState) => state.application.walletInfo
	);
	const { publicKey } = useWallet();
	const dispatch = useDispatch();
	const connection = useConnection();
	const anchorWallet = useAnchorWallet();
	const stakingSymbol = 'SOLPAD';
	const paymentSymbol = 'Sol';
	const paymentNetwork = 'Solana';
	const stakeable = true;
	const [confirmedStake, setConfirmedStake] = useState(false);
	const stakeLoadingPercent = 100;

	useEffect(() => {
		if (publicKey) dispatch(getCurrentBalanceValue(publicKey));
	}, [publicKey]);

	const handleConfirmStake = (confirm: boolean) => {
		setConfirmedStake(confirm);
	};

	const handleStakeAmountChange = (newAmount: number) => {
		setStakeAmount(newAmount);
	};

	const handlePrev: VoidFunction = () => {
		if (currentStep === 1) return;
		setCurrentStep(currentStep - 1);
	};

	const handleNext: VoidFunction = () => {
		if (currentStep === STEPS.length) return;

		if (currentStep === STEPS.length - 1 && anchorWallet) {
			dispatch(stakeDeposite());
			stakeService
				.stakerDeposit(connection, anchorWallet, stakeAmount)
				.then(result => {
					if (result.status && result.data && publicKey) {
						dispatch(stakeDepositeSuccess(result.data));
						dispatch(getStakeDetail(publicKey));
						setCurrentStep(currentStep + 1);
					} else {
						const notifyTransaction = () => toast.success('Stake fail!');
						dispatch(stakeDepositeFail());
						notifyTransaction();
					}
				})
				.catch(error => {
					console.log(error);
					const notifyTransaction = () => toast.success('Stake fail!');
					dispatch(stakeDepositeFail());
					notifyTransaction();
				});
		} else {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleDone: VoidFunction = () => {
		dispatch(stakeDepositeFail());
		setCurrentStep(1);
		handleConfirmStake?.(false);
		console.log('Done');
	};

	return (
		<>
			<SolStakingStake
				steps={STEPS}
				currentStep={currentStep}
				walletInfo={walletInfo}
				stakingSymbol={stakingSymbol}
				paymentSymbol={paymentSymbol}
				paymentNetwork={paymentNetwork}
				stakeable={stakeable}
				confirmedStake={confirmedStake}
				stakeAmount={stakeAmount}
				stakeLoadingPercent={stakeLoadingPercent}
				onStakeAmountChange={handleStakeAmountChange}
				onConfirmStake={handleConfirmStake}
				onPrev={handlePrev}
				onNext={handleNext}
				onDone={handleDone}
			/>
		</>
	);
};
export default SolStakingStakeContainer;
