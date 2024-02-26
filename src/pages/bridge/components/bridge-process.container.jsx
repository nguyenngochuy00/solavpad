import { useState } from 'react';
import SolBridgeProcessDialog from 'src/components/organisms/bridge/bridge-process-dialog';

const SolBridgeProcessDialogContainer = ({ show, onClose }) => {
    const BRIDGE_STEPS = [
        { step: 1, text: 'Confirmation' },
        { step: 2, text: 'Authorization' },
        { step: 3, text: 'Depositing' },
        { step: 4, text: 'Completion' }
    ]
    const [step, setStep] = useState(1);

    const handlePrev = () => {
        if (step === 1) return;
        setStep(step - 1);
    }

    const handleNext = () => {
        if (step === BRIDGE_STEPS.length) return;
        setStep(step + 1);
    }

    const handleDone = () => {
        onClose();
    }

    return <>
        <SolBridgeProcessDialog
            show={show}
            steps={BRIDGE_STEPS}
            currentStep={step}
            onPrev={handlePrev}
            onNext={handleNext}
            onDone={handleDone}
            onClose={onClose}
        />
    </>
}
export default SolBridgeProcessDialogContainer