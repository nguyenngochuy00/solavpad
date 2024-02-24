import { Col, Row } from "react-bootstrap";
import SolButton from "../../../atoms/button";
import SolModal from "../../../atoms/modal";
import SolStepperVertical from "../../common/stepper-vertical";
import SolBridgeProcessStep1 from "./components/step-1";
import SolBridgeProcessStep2 from "./components/step-2";
import SolBridgeProcessStep3 from "./components/step-3";
import SolBridgeProcessStep4 from "./components/step-4";
import "./index.scss";

const SolBridgeProcessDialog = ({ show, steps, currentStep, onPrev, onNext, onDone, onClose }) => {
    return <SolModal size="lg" show={show} className="sol-bridge-process-dialog" title="Bridge process" onClose={onClose}>
        <Row>
            <Col lg="4">
                <SolStepperVertical steps={steps} currentStep={currentStep} />
            </Col>
            <Col lg="8">
                <div className="sol-bridge-process-content">
                    <div className="sol-bridge-process-body">
                        {/* Step 1 */}
                        {currentStep === 1 ?
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
                        {currentStep === 2 ?
                            <SolBridgeProcessStep2
                                amount={1}
                                symbol="BlastFi"
                            /> : <></>
                        }

                        {/* Step 3 */}
                        {currentStep === 3 ?
                            <SolBridgeProcessStep3
                                symbol="BlastFi"
                            /> : <></>
                        }

                        {/* Step 4 */}
                        {currentStep === 4 ?
                            <SolBridgeProcessStep4
                                status="pending"
                                symbol="BlastFi"
                                fromNetwork="Blast Sepolia"
                            /> : <></>}
                    </div>
                    <div className="sol-bridge-process-action">
                        {
                            currentStep !== 4 ? <>
                                <SolButton onClick={onPrev} disabled={currentStep === 1} caption="Previous" icon={<img src="/images/icons/prev.svg" alt="" />} />
                                <SolButton onClick={onNext} caption="Next" icon={<img src="/images/icons/next.svg" alt="" />} variant="primary" />
                            </> :
                                <SolButton onClick={onDone} caption="Done" variant="primary" />
                        }
                    </div>
                </div>
            </Col>
        </Row>
    </SolModal>
}
export default SolBridgeProcessDialog