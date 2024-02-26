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
    symbol,
    networkName,
    connectedWallet = false,
    tokenAvaiable = 0,
    balanceAvailable = 0,
    balanceSymbol,
    stakeable = false,
    confirmed,
    amount = 0,
    stakeLoadingPercent,
    isValid = false,
    onConfirm,
    onAmountChange,
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
                            symbol={symbol}
                            connectedWallet={connectedWallet}
                            tokenAvaiable={tokenAvaiable}
                            balanceAvailable={balanceAvailable}
                            balanceSymbol={balanceSymbol}
                            networkName={networkName}
                            stakeable={stakeable}
                            confirmed={confirmed}
                            onConfirm={onConfirm}
                        /> : <></>}
                        {currentStep === 2 ? <SolStakingStakeStep2
                            amount={amount}
                            symbol={symbol}
                            onAmountChange={onAmountChange}
                        /> : <></>}
                        {currentStep === 3 ? <SolStakingStakeStep3
                            percent={stakeLoadingPercent}
                        /> : <></>}
                        {currentStep === 4 ? <SolStakingStakeStep4
                            symbol={symbol}
                        /> : <></>}
                        {currentStep === 5 ? <SolStakingStakeStep5
                            symbol={symbol}
                        /> : <></>}
                    </div>
                    <div className="sol-staking-stake-action">
                        {
                            currentStep !== 5 ? <>
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
export default SolStakingStake