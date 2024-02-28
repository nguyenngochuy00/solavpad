import { Col, Row } from "react-bootstrap";
import "./index.scss";

const SolBridgeTemplate = ({ header, leftPanel, rightPanel }) => {
    return <div className="sol-bridge-template">
        {header}
        <Row className="align-items-center">
            <Col xl="6" lg="9">
                {leftPanel}
            </Col>
            <Col xl="6">
                <div className="d-none d-xl-block">
                    {rightPanel}
                </div>
            </Col>
        </Row>
    </div>
}
export default SolBridgeTemplate