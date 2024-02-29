import { Col, Row } from "react-bootstrap";
import "./index.scss";
import SolAllocationCard from "../../common/allocation-card";

const SolLaunchpadDetailAllocation = ({ allocations, onClaim }) => {
    return <div className="sol-launchpad-detail-allocation">
        <Row>
            {
                allocations.map((allocation, index) => <Col lg="6" key={index}>
                    <SolAllocationCard
                        index={index + 1}
                        value={allocation.value}
                        percent={allocation.percent}
                        claimed={allocation.claimed}
                        time={allocation.time}
                        onClaim={onClaim ? () => onClaim(allocation, index) : null}
                    />
                </Col>)
            }
        </Row>
    </div>
}
export default SolLaunchpadDetailAllocation