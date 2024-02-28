import { Col, Row } from "react-bootstrap";
import SolCard from "src/components/molecules/card";
import "./index.scss";

const SolLaunchpadDetailPoolInfo = ({
    opening = false
}) => {
    return <div className="sol-launchpad-detail-pool-info">
        <Row>
            <Col lg="6">
                <SolCard title="Pool Information" className="h-100">
                    <table>
                        <tbody>
                            <tr>
                                <td>Opens</td>
                                <td><b>01-31 09:01 UTC</b></td>
                            </tr>
                            <tr>
                                <td>FCFS Opens</td>
                                <td><b>01-31 13:46 UTC</b></td>
                            </tr>
                            <tr>
                                <td>Closes</td>
                                <td><b>01-31 15:01 UTC</b></td>
                            </tr>
                            <tr>
                                <td>Swap Rate</td>
                                <td><b>1 BUSD = 125.0000 CPO</b></td>
                            </tr>
                            <tr>
                                <td>Cap</td>
                                <td><b>100,000 BUSD</b></td>
                            </tr>
                            <tr>
                                <td>Total Users Participated</td>
                                <td><b>243</b></td>
                            </tr>
                            <tr>
                                <td>Total Funds Swapped</td>
                                <td><b>100,095.8583 BUSD</b></td>
                            </tr>
                            <tr>
                                <td>Access Type</td>
                                <td><b>Private</b></td>
                            </tr>
                        </tbody>
                    </table>
                </SolCard>
            </Col>
            <Col lg="6">
                <SolCard title="Token Information" action="+ Add to Metamask">
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td><b>Cryptopolis (Blue Diamond Private)</b></td>
                            </tr>
                            <tr>
                                <td>Token Symbol</td>
                                <td><b>CPO</b></td>
                            </tr>
                        </tbody>
                    </table>
                </SolCard>

                <SolCard title="Schedule">
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Allocation</b></td>
                                <td>
                                    <div>
                                        <span>Opens:</span>
                                        <b>2021-10-18 08:00:00 UTC</b>
                                    </div>
                                    <div>
                                        <span>Closes:</span>
                                        <b>2021-10-18 08:00:00 UTC</b>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><b>FCFS - Prepare</b></td>
                                <td>
                                    <div>
                                        <span>Opens:</span>
                                        <b>2021-10-18 08:00:00 UTC</b>
                                    </div>
                                    <div>
                                        <span>Closes:</span>
                                        <b>2021-10-18 08:00:00 UTC</b>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><b>FCFS - Prepare</b></td>
                                <td>
                                    <div>
                                        <span>Opens:</span>
                                        <b>2021-10-18 08:00:00 UTC</b>
                                    </div>
                                    <div>
                                        <span>Closes:</span>
                                        <b>2021-10-18 08:00:00 UTC</b>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </SolCard>
            </Col>
        </Row>
    </div>
}
export default SolLaunchpadDetailPoolInfo