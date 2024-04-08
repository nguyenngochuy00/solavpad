import {
	useAnchorWallet,
	useConnection,
	useWallet
} from '@solana/wallet-adapter-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import SolStakingWithdraw from '../../../components/organisms/staking/staking-panel/withdraw';
import { stakeService } from '../../../services/blockchain';
import {
	getStakeDetail,
	implementWithdraw,
	implementWithdrawFail,
	implementWithdrawSuccess
} from '../redux/actions';

const SolStakingWithdrawContainer: React.FC = () => {
	const dispatch = useDispatch();
	const STEPS = [
		{ step: 1, text: 'Checkpoints' },
		{ step: 2, text: 'Initialize Withdrawal' },
		{ step: 3, text: 'Confirmation' }
	];
	const [currentStep, setCurrentStep] = useState<number>(1);
	const withdrawSymbol = 'Sol';
	const paymentSymbol = 'BNB';
	const connection = useConnection();
	const anchorWallet = useAnchorWallet();
	const [confirmedWithdraw, setConfirmedWithdraw] = useState(false);
	const { publicKey } = useWallet();

	const handleConfirmWithdraw = (confirm: boolean) => {
		setConfirmedWithdraw(confirm);
	};

	const handlePrev: VoidFunction = () => {
		if (currentStep === 1) return;
		setCurrentStep(currentStep - 1);
	};

	const handleNext: VoidFunction = () => {
		if (currentStep === STEPS.length) return;

		if (currentStep === STEPS.length - 1 && anchorWallet) {
			dispatch(implementWithdraw());
			stakeService
				.stakerExecuteWithdraw(connection, anchorWallet)
				.then(result => {
					if (result.status && result.data && publicKey) {
						dispatch(implementWithdrawSuccess(result.data));
						dispatch(getStakeDetail(publicKey));
						setCurrentStep(currentStep + 1);
					} else {
						const notifyTransaction = () => toast.success('Withdraw fail!');
						dispatch(implementWithdrawFail());
						notifyTransaction();
					}
				})
				.catch(error => {
					console.log(error);
					const notifyTransaction = () => toast.success('Withdraw fail!');
					dispatch(implementWithdrawFail());
					notifyTransaction();
					//handle error close processing and show error message
				});
		} else {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleDone = () => {
		setCurrentStep(1);
		console.log('Done');
		dispatch(implementWithdrawFail());
		handleConfirmWithdraw?.(false);
	};

	return (
		<>
			<SolStakingWithdraw
				onStakeAmountChange={() => {}}
				stakeAmount={1}
				steps={STEPS}
				currentStep={currentStep}
				withdrawSymbol={withdrawSymbol}
				paymentSymbol={paymentSymbol}
				confirmedWithdraw={confirmedWithdraw}
				onConfirmWithdraw={handleConfirmWithdraw}
				onPrev={handlePrev}
				onNext={handleNext}
				onDone={handleDone}
			/>
		</>
	);
};
export default SolStakingWithdrawContainer;
