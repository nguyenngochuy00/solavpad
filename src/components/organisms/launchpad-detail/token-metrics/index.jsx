import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Col, Row } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import "./index.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const SolLaunchpadDetailTokenMetrics = ({ data, chartOptions }) => {
    return <div className="sol-launchpad-detail-token-metrics">
        <Row className='justify-content-center'>
            <Col lg="6">
                <Doughnut
                    redraw
                    data={data}
                    options={chartOptions}
                />
            </Col>
        </Row>
    </div>
}
export default SolLaunchpadDetailTokenMetrics