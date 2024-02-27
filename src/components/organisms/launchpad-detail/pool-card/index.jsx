import { Col, Row } from "react-bootstrap";
import SolButton from "src/components/atoms/button";
import SolInfo from "src/components/molecules/info-block";
import SolProgressBar from "src/components/molecules/progress-bar";
import "./index.scss";

const SolLaunchpadDetailPoolCard = ({
    opening,
    countDownTime,
    yourBalance,
    yourBalanceConvert,
    yourApprovedAmount,
    yourTier,
    swappedValue,
    swappedValueConvert,
    remainingAllocation,
    progressPercent,
    participants,
    onJoinPool,
    onApprove
}) => {
    return <div className="sol-launchpad-detail-pool-card">
        <Row className="gx-lg-5">
            <Col lg="4">
                <div className="sol-launchpad-detail-pool-card-left">
                    <SolInfo label="Your balance" value={yourBalance} value2={yourBalanceConvert} size="lg" />
                    <SolInfo label="Your approved" value={yourApprovedAmount} size="lg" />
                    <SolInfo label="Your tier" value={yourTier} size="lg" />
                </div>
            </Col>
            <Col lg="8">
                <div className="sol-launchpad-detail-pool-card-right">
                    <SolInfo label={opening ? "Allocation Round Closed in:" : "Allocation Round"} value={opening ? countDownTime : 'Closed'} size="lg" />
                    <Row>
                        <Col md="6">
                            <SolInfo label="Swapped" value={swappedValue} value2={swappedValueConvert} size="lg" />
                        </Col>
                        <Col md="6">
                            <SolInfo label="Remaining Allocation" value={remainingAllocation} size="lg" />
                        </Col>
                    </Row>
                    <SolProgressBar percent={progressPercent} size='lg' />
                    <div className='sol-progress-bar-info'>
                        <span>{opening ? 'Allocation round' : `${progressPercent}%`}</span>
                        <span><b>{participants}</b> participants</span>
                    </div>
                    <div className="sol-launchpad-detail-pool-card-action">
                        <SolButton variant="primary" size="lg" caption="Join Pool" onClick={onJoinPool} />
                        <SolButton size="lg" caption="Join Pool" onClick={onApprove} />
                    </div>
                </div>
            </Col>
        </Row>
    </div>
}
export default SolLaunchpadDetailPoolCard