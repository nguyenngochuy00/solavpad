import { Col, Row } from "react-bootstrap";
import SolButton from "src/components/atoms/button";
import SolStepperVertical from "src/components/organisms/common/stepper-vertical";
import SolStakingWithdrawStep1 from "./components/step-1";
import SolStakingWithdrawStep2 from "./components/step-2";
import SolStakingWithdrawStep3 from "./components/step-3";
import "./index.scss";

const SolStakingWithdraw = ({
    steps,
    currentStep,
    walletInfo,
    withdrawSymbol,
    yourStakedAmount,
    yourStakedRewards,
    paymentBalance,
    paymentSymbol,
    confirmedWithdraw,
    isValid,
    onConfirmWithdraw,
    onPrev,
    onNext,
    onDone
}) => {
    return <div className="sol-staking-withdraw">
        <Row>
            <Col lg="4">
                <SolStepperVertical
                    steps={steps}
                    currentStep={currentStep}
                />
            </Col>
            <Col lg="8">
                <div className="sol-staking-stake-content">
                    <div className="sol-staking-stake-body">
                        {currentStep === 1 ? <SolStakingWithdrawStep1
                            walletInfo={walletInfo}
                            withdrawSymbol={withdrawSymbol}
                            yourStakedAmount={yourStakedAmount}
                            yourStakedRewards={yourStakedRewards}
                            paymentBalance={paymentBalance}
                            paymentSymbol={paymentSymbol}
                            confirmedWithdraw={confirmedWithdraw}
                            onConfirmWithdraw={onConfirmWithdraw}
                        /> : <></>}

                        {currentStep === 2 ? <SolStakingWithdrawStep2
                        /> : <></>}
                        
                        {currentStep === 3 ? <SolStakingWithdrawStep3
                            withdrawSymbol={withdrawSymbol}
                        /> : <></>}
                    </div>
                    <div className="sol-staking-stake-action">
                        {
                            currentStep !== 3 ? <>
                                <SolButton onClick={onPrev} disabled={currentStep === 1} caption="Previous" icon={<img src="/images/icons/prev.svg" alt="" />} />
                                <SolButton onClick={onNext} disabled={!isValid} caption="Next" icon={<img src="/images/icons/next.svg" alt="" />} variant="primary" />
                            </> :
                                <SolButton onClick={onDone} caption="Done" variant="primary" />
                        }
                    </div>
                </div>
            </Col>
        </Row>
    </div>
}
export default SolStakingWithdraw