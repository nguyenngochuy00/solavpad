import { Col, Row } from "react-bootstrap";
import SolStepperVertical from "../../common/stepper-vertical";
import SolBridgeProcessStep1 from "./components/step-1";
import SolBridgeProcessStep2 from "./components/step-2";
import SolBridgeProcessStep3 from "./components/step-3";
import SolBridgeProcessStep4 from "./components/step-4";
import "./index.scss";

const SolBridgeProcessDialog = () => {
    return <div className="sol-bridge-process-dialog">
        <Row>
            <Col lg="4">
                <SolStepperVertical />
            </Col>
            <Col lg="8">
                <SolBridgeProcessStep1 />
                <SolBridgeProcessStep2 />
                <SolBridgeProcessStep3 />
                <SolBridgeProcessStep4 />
            </Col>
        </Row>
    </div>
}
export default SolBridgeProcessDialog