import { Col, Row } from "react-bootstrap";
import "./index.scss";

const SolStakingTemplate = ({header, leftPanel, rightPanel}) => {
    return <div className="sol-staking-template">
        {header}
        <Row>
            <Col lg="8">
                {leftPanel}
            </Col>
            <Col lg="4">
                {rightPanel}
            </Col>
        </Row>
    </div>
}
export default SolStakingTemplate