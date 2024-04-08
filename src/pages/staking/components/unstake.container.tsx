import { publicKey } from '@project-serum/anchor/dist/cjs/utils';
import {
	useAnchorWallet,
	useConnection,
	useWallet
} from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import SolStakingUnstake from '../../../components/organisms/staking/staking-panel/unstake';
import { stakeService } from '../../../services/blockchain';
import {
	getCurrentBalanceValue,
	getStakeDetail,
	unstakeInit,
	unstakeInitFail,
	unstakeInitSuccess
} from '../redux/actions';

const STEPS = [
	{ step: 1, text: 'Warning' },
	{ step: 2, text: 'Checkpoints' },
	{ step: 3, text: 'Amount to Unstake' },
	// { step: 3, text: 'Pre-authorization' },
	{ step: 4, text: 'Initialize Unstake' },
	{ step: 5, text: 'Confirmation' }
];

const SolStakingUnstakeContainer: React.FC = () => {
	const dispatch = useDispatch();
	const { publicKey } = useWallet();
	const [currentStep, setCurrentStep] = useState<number>(1);
	const [confirmedStake, setConfirmedStake] = useState(false);
	const [stakeAmount, setStakeAmount] = useState<number>(1);
	const connection = useConnection();
	const anchorWallet = useAnchorWallet();
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
			dispatch(unstakeInit());
			stakeService
				.stakerInitWithdraw(connection, anchorWallet, stakeAmount)
				.then(result => {
					if (result.status && result.data && publicKey) {
						dispatch(unstakeInitSuccess(result.data));
						dispatch(getStakeDetail(publicKey));
						setCurrentStep(currentStep + 1);
					} else {
						setCurrentStep(currentStep);
						const notifyTransaction = () => toast.error('Unstake fail!');
						dispatch(unstakeInitFail());
						notifyTransaction();
					}
				})
				.catch(error => {
					setCurrentStep(currentStep);
					const notifyTransaction = () => toast.error('Unstake fail!');
					dispatch(unstakeInitFail());
					notifyTransaction();
					//handle error close processing and show error message
				});
		} else {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleDone: VoidFunction = () => {
		dispatch(unstakeInitFail());
		setCurrentStep(1);
		console.log('Done');
		handleConfirmStake?.(false);
	};
	return (
		<>
			<SolStakingUnstake
				steps={STEPS}
				currentStep={currentStep}
				onDone={handleDone}
				onNext={handleNext}
				onPrev={handlePrev}
				stakeable={true}
				stakeAmount={stakeAmount}
				onConfirmStake={handleConfirmStake}
				confirmedStake={confirmedStake}
				onStakeAmountChange={handleStakeAmountChange}
			/>
		</>
	);
};
export default SolStakingUnstakeContainer;
