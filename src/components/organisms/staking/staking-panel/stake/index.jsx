import { Col, Row } from "react-bootstrap";
import SolStepperVertical from "src/components/organisms/common/stepper-vertical";
import SolStakingStakeStep1 from "./components/step-1";
import SolStakingStakeStep2 from "./components/step-2";
import SolStakingStakeStep3 from "./components/step-3";
import SolStakingStakeStep4 from "./components/step-4";
import SolStakingStakeStep5 from "./components/step-5";
import "./index.scss";
import SolButton from "src/components/atoms/button";

const SolStakingStake = ({
    steps,
    currentStep,
    walletInfo,
    stakingSymbol,
    currentBalance,
    paymentBalance,
    paymentSymbol,
    paymentNetwork,
    stakeable,
    confirmedStake,
    stakeAmount,
    stakeLoadingPercent,
    isValid = false,
    onConfirmStake,
    onStakeAmountChange,
    onPrev,
    onNext,
    onDone
}) => {
    return <div className="sol-staking-stake">
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
                        {currentStep === 1 ? <SolStakingStakeStep1
                            walletInfo={walletInfo}
                            stakingSymbol={stakingSymbol}
                            currentBalance={currentBalance}
                            paymentBalance={paymentBalance}
                            paymentSymbol={paymentSymbol}
                            networkName={paymentNetwork}
                            stakeable={stakeable}
                            confirmedStake={confirmedStake}
                            onConfirmStake={onConfirmStake}
                        /> : <></>}
                        {currentStep === 2 ? <SolStakingStakeStep2
                            stakeAmount={stakeAmount}
                            stakingSymbol={stakingSymbol}
                            onStakeAmountChange={onStakeAmountChange}
                        /> : <></>}
                        {currentStep === 3 ? <SolStakingStakeStep3
                            stakeAmount={stakeAmount}
                            stakingSymbol={stakingSymbol}
                            stakeLoadingPercent={stakeLoadingPercent}
                        /> : <></>}
                        {currentStep === 4 ? <SolStakingStakeStep4
                            stakingSymbol={stakingSymbol}
                        /> : <></>}
                        {currentStep === 5 ? <SolStakingStakeStep5
                            stakingSymbol={stakingSymbol}
                        /> : <></>}
                    </div>
                    <div className="sol-staking-stake-action">
                        {
                            currentStep !== 5 ? <>
                                <SolButton onClick={onPrev} disabled={currentStep === 1} caption="Previous" icon={<img src="/images/icons/prev.svg" alt="" />} />
                                <SolButton onClick={onNext} disabled={!isValid} caption="Next" className="icon-right" icon={<img src="/images/icons/next.svg" alt="" />} variant="primary" />
                            </> :
                                <SolButton onClick={onDone} caption="Done" variant="primary" />
                        }
                    </div>
                </div>
            </Col>
        </Row>
    </div>
}
export default SolStakingStake