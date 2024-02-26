import { Col, Row } from "react-bootstrap";
import "./index.scss";

const SolStakingTemplate = ({ header, leftPanel, rightPanel }) => {
    return <div className="sol-staking-template">
        {header}
        <Row>
            <Col lg="8">
                <div className="sol-staking-panel">
                    {leftPanel}
                </div>
            </Col>
            <Col lg="4">
                <div className="sol-staking-your-info">
                    {rightPanel}
                </div>
            </Col>
        </Row>
    </div>
}
export default SolStakingTemplate