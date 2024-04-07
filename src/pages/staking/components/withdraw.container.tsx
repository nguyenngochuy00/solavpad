import { get } from 'lodash';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SolStakingWithdraw from "../../../components/organisms/staking/staking-panel/withdraw";

const SolStakingWithdrawContainer: React.FC = () => {
	const STEPS = [
		{ step: 1, text: 'Checkpoints' },
		{ step: 2, text: 'Initialize Withdrawal' },
		{ step: 3, text: 'Confirmation' }
	];
	const [currentStep, setCurrentStep] = useState<number>(1);
	const withdrawSymbol = 'Sol';
	const paymentSymbol = 'BNB';
	const [confirmedWithdraw, setConfirmedWithdraw] = useState(false);

	const handleConfirmWithdraw = (confirm : boolean) => {
		setConfirmedWithdraw(confirm);
	};

	const handlePrev: VoidFunction = () => {
		if (currentStep === 1) return;
		setCurrentStep(currentStep - 1);
	};

	const handleNext: VoidFunction = () => {
		if (currentStep === STEPS.length) return;
		setCurrentStep(currentStep + 1);
	};

	const handleDone = () => {
		setCurrentStep(1);
		console.log('Done');
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
