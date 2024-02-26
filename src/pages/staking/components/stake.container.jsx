import { useState } from "react";
import SolStakingStake from "src/components/organisms/staking/staking-panel/stake";

const SolStakingStakeContainer = () => {
    const STEPS = [
        { step: 1, text: 'Checkpoints' },
        { step: 2, text: 'Amount to Stake' },
        { step: 3, text: 'Pre-authorization' },
        { step: 4, text: 'Confirm' },
        { step: 5, text: 'Confirmation' }
    ]
    const [currentStep, setCurrentStep] = useState(1);
    const [stakeAmount, setStakeAmount] = useState(1);
    const connectedWallet = true;
    const currentBalance = 1;
    const stakingSymbol = 'BSCPAD';
    const paymentBalance = 1;
    const paymentSymbol = "BNB";
    const paymentNetwork = "Binance Smart Chain";
    const stakeable = true;
    const [confirmedStake, setConfirmedStake] = useState(false);
    const stakeLoadingPercent = 100;

    const handleConfirmStake = (confirm) => {
        setConfirmedStake(confirm);
    }

    const handleStakeAmountChange = (newAmount) => {
        setStakeAmount(newAmount)
    }

    const handlePrev = () => {
        if (currentStep === 1) return;
        setCurrentStep(currentStep - 1);
    }

    const handleNext = () => {
        if (currentStep === STEPS.length) return;
        setCurrentStep(currentStep + 1);
    }

    const handleDone = () => {
        setCurrentStep(1);
        console.log('Done');
    }

    return <>
        <SolStakingStake
            steps={STEPS}
            currentStep={currentStep}
            connectedWallet={connectedWallet}
            stakingSymbol={stakingSymbol}
            currentBalance={currentBalance}
            paymentBalance={paymentBalance}
            paymentSymbol={paymentSymbol}
            paymentNetwork={paymentNetwork}
            stakeable={stakeable}
            confirmedStake={confirmedStake}
            stakeAmount={stakeAmount}
            stakeLoadingPercent={stakeLoadingPercent}
            isValid={
                (currentStep === 1 && confirmedStake && connectedWallet && currentBalance && paymentBalance && stakeable) ||
                (currentStep === 2 && stakeAmount) ||
                (currentStep === 3 && stakeLoadingPercent === 100) ||
                (currentStep === 4)
            }
            onStakeAmountChange={handleStakeAmountChange}
            onConfirmStake={handleConfirmStake}
            onPrev={handlePrev}
            onNext={handleNext}
            onDone={handleDone}
        />
    </>
}
export default SolStakingStakeContainer