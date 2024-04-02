import { get } from 'lodash';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import SolUnstakingWithdraw from "src/components/organisms/staking/staking-panel/withdraw";

const SolStakingWithdrawContainer: React.FC = () => {
	const STEPS = [
		{ step: 1, text: 'Prerequisites' },
		{ step: 2, text: 'Initialize Withdrawal' },
		{ step: 3, text: 'Confirmation' }
	];
	const [currentStep, setCurrentStep] = useState<number>(1);
	const withdrawSymbol = 'BSCPAD';
	const yourStakedAmount = 1;
	const yourStakedRewards = 1;
	const paymentBalance = 1;
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
			{/* <SolUnstakingWithdraw
				steps={STEPS}
				currentStep={currentStep}
				walletInfo={walletInfo}
				withdrawSymbol={withdrawSymbol}
				yourStakedAmount={yourStakedAmount}
				yourStakedRewards={yourStakedRewards}
				paymentBalance={paymentBalance}
				paymentSymbol={paymentSymbol}
				confirmedWithdraw={confirmedWithdraw}
				isValid={
					(currentStep === 1 &&
						confirmedWithdraw &&
						walletInfo &&
						yourStakedAmount &&
						yourStakedRewards &&
						paymentBalance) ||
					currentStep !== 1
				}
				onConfirmWithdraw={handleConfirmWithdraw}
				onPrev={handlePrev}
				onNext={handleNext}
				onDone={handleDone}
			/> */}
		</>
	);
};
export default SolStakingWithdrawContainer;
