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
    const [step, setStep] = useState(1);
    const [confirmed, setConfirmed] = useState(false);
    const [amount, setAmount] = useState(1);
    const connectedWallet = true;
    const tokenAvaiable = 1;
    const balanceAvailable = 1;
    const stakeable = true;
    const stakeLoadingPercent = 100;

    const handleConfirm = (confirm) => {
        setConfirmed(confirm);
    }

    const handleAmountChange = (newAmount) => {
        setAmount(newAmount)
    }

    const handlePrev = () => {
        if (step === 1) return;
        setStep(step - 1);
    }

    const handleNext = () => {
        if (step === STEPS.length) return;
        setStep(step + 1);
    }

    const handleDone = () => {
        setStep(1);
        console.log('Done');
    }

    return <>
        <SolStakingStake
            currentStep={step}
            steps={STEPS}
            symbol="BSCPAD"
            networkName="Binance Smart Chain"
            connectedWallet={connectedWallet}
            tokenAvaiable={tokenAvaiable}
            balanceAvailable={balanceAvailable}
            balanceSymbol="BNB"
            stakeable={stakeable}
            confirmed={confirmed}
            stakeLoadingPercent={stakeLoadingPercent}
            isValid={
                (step === 1 && confirmed && connectedWallet && tokenAvaiable && balanceAvailable && stakeable) ||
                (step === 2 && amount) ||
                (step === 3 && stakeLoadingPercent === 100) ||
                (step === 4)
            }
            amount={amount}
            onAmountChange={handleAmountChange}
            onConfirm={handleConfirm}
            onPrev={handlePrev}
            onNext={handleNext}
            onDone={handleDone}
        />
    </>
}
export default SolStakingStakeContainer