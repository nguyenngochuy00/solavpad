import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SolButton from "../../../atoms/button";
import SolModal from "../../../atoms/modal";
import SolStepperVertical from "../../common/stepper-vertical";
import SolBridgeProcessStep1 from "./components/step-1";
import SolBridgeProcessStep2 from "./components/step-2";
import SolBridgeProcessStep3 from "./components/step-3";
import SolBridgeProcessStep4 from "./components/step-4";
import "./index.scss";

const SolBridgeProcessDialog = ({ show, onClose }) => {
    const [step, setStep] = useState(1);

    const handlePrev = () => {
        if (step === 1) return;
        setStep(step - 1);
    }

    const handleNext = () => {
        if (step === 4) return;
        setStep(step + 1);
    }

    const handleDone = ()=>{
        onClose();
    }

    return <SolModal size="lg" show={show} className="sol-bridge-process-dialog" title="Bridge process" onClose={onClose}>
        <Row>
            <Col lg="4">
                <SolStepperVertical
                    steps={[
                        { step: 1, text: 'Confirmation' },
                        { step: 2, text: 'Authorization' },
                        { step: 3, text: 'Depositing' },
                        { step: 4, text: 'Completion' }
                    ]}
                    currentStep={step}
                />
            </Col>
            <Col lg="8">
                <div className="sol-bridge-process-content">
                    <div className="sol-bridge-process-body">
                        {/* Step 1 */}
                        {step === 1 ?
                            <SolBridgeProcessStep1
                                amount={1}
                                symbol="BlastFi"
                                logo="/images/icons/blastfi.svg"
                                fromNetwork="Blast Sepolia"
                                toNetwork="BNB Chain"
                                fee={1}
                            /> : <></>
                        }
                        {/* Step 2 */}
                        {step === 2 ?
                            <SolBridgeProcessStep2
                                amount={1}
                                symbol="BlastFi"
                            /> : <></>
                        }

                        {/* Step 3 */}
                        {step === 3 ?
                            <SolBridgeProcessStep3
                                symbol="BlastFi"
                            /> : <></>
                        }

                        {/* Step 4 */}
                        {step === 4 ?
                            <SolBridgeProcessStep4
                                status="pending"
                                symbol="BlastFi"
                                fromNetwork="Blast Sepolia"
                            /> : <></>}
                    </div>
                    <div className="sol-bridge-process-action">
                        {
                            step !== 4 ? <>
                                <SolButton onClick={handlePrev} disabled={step === 1} caption="Previous" icon={<img src="/images/icons/prev.svg" alt="" />} />
                                <SolButton onClick={handleNext} caption="Next" icon={<img src="/images/icons/next.svg" alt="" />} variant="primary" />
                            </> :
                                <SolButton onClick={handleDone} caption="Done" variant="primary" />
                        }
                    </div>
                </div>
            </Col>
        </Row>
    </SolModal>
}
export default SolBridgeProcessDialog