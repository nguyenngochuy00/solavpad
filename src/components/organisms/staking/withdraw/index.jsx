import { Col, Row } from "react-bootstrap";
import SolStepperVertical from "../../common/stepper-vertical";
import SolStakingWithdrawStep1 from "./components/step-1";
import SolStakingWithdrawStep2 from "./components/step-2";
import SolStakingWithdrawStep3 from "./components/step-3";
import "./index.scss";

const SolStakingWithdraw = () => {
    return <div className="sol-staking-withdraw">
        <Row>
            <Col lg="4">
                <SolStepperVertical />
            </Col>
            <Col lg="8">
                <SolStakingWithdrawStep1 />
                <SolStakingWithdrawStep2 />
                <SolStakingWithdrawStep3 />
            </Col>
        </Row>
    </div>
}
export default SolStakingWithdraw