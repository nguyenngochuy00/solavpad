import { Col, Row } from "react-bootstrap";
import SolStepperVertical from "src/components/organisms/common/stepper-vertical";
import SolStakingStakeStep1 from "./components/step-1";
import SolStakingStakeStep2 from "./components/step-2";
import SolStakingStakeStep3 from "./components/step-3";
import SolStakingStakeStep4 from "./components/step-4";
import SolStakingStakeStep5 from "./components/step-5";
import "./index.scss";

const SolStakingStake = () => {
    return <div className="sol-staking-stake">
        <Row>
            <Col lg="4">
                <SolStepperVertical />
            </Col>
            <Col lg="8">
                <SolStakingStakeStep1 />
                <SolStakingStakeStep2 />
                <SolStakingStakeStep3 />
                <SolStakingStakeStep4 />
                <SolStakingStakeStep5 />
            </Col>
        </Row>
    </div>
}
export default SolStakingStake