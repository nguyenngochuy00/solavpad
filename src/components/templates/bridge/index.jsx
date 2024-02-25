import { Col, Row } from "react-bootstrap";
import "./index.scss";

const SolBridgeTemplate = ({ header, leftPanel, rightPanel }) => {
    return <div className="sol-bridge-template">
        {header}
        <Row>
            <Col lg="6">
                {leftPanel}
            </Col>
            <Col lg="6">
                {rightPanel}
            </Col>
        </Row>
    </div>
}
export default SolBridgeTemplate