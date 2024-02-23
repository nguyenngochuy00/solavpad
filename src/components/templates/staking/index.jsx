import { Col, Row } from "react-bootstrap";
import SolPageTitle from "../../molecules/page-title";
import SolStakingStake from "../../organisms/staking/stake";
import SolStakingStatistics from "../../organisms/staking/statistics";
import SolStakingUnstake from "../../organisms/staking/unstake";
import SolStakingWithdraw from "../../organisms/staking/withdraw";
import SolStakingYourInformation from "../../organisms/staking/your-information";
import "./index.scss";

const SolStakingTemplate = () => {
    return <div className="sol-staking-template">
        <SolPageTitle>Solav Staking</SolPageTitle>
        <SolStakingStatistics />
        <Row>
            <Col lg="9">
                <div className="sol-staking-template-tabs"></div>
                <SolStakingStake />
                <SolStakingUnstake />
                <SolStakingWithdraw />
            </Col>
            <Col lg="3">
                <SolStakingYourInformation />
            </Col>
        </Row>
    </div>
}
export default SolStakingTemplate