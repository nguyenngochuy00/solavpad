import { ArcElement, Chart as ChartJS, ChartData, Legend, Tooltip } from 'chart.js';
import { Col, Row } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import { TokenMetricsType } from '../../../../types';
import './index.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

// sample data
// {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//         {
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 '#e250e5',
//                 '#8350e6',
//                 '#4b50e6',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderColor: [
//                 'rgba(255, 255, 255, 0.1)',
//                 'rgba(255, 255, 255, 0.1)',
//                 'rgba(255, 255, 255, 0.1)',
//                 'rgba(255, 255, 255, 0.1)',
//                 'rgba(255, 255, 255, 0.1)',
//                 'rgba(255, 255, 255, 0.1)'
//             ],
//             borderWidth: 1
//         }
//     ]
// }

// current data

interface SolLaunchpadDetailTokenMetricsProps {
	data: TokenMetricsType;
	chartOptions?: any;
}

const SolLaunchpadDetailTokenMetrics = ({
	data,
	chartOptions
}: SolLaunchpadDetailTokenMetricsProps) => {
	return (
		<div className="sol-launchpad-detail-token-metrics">
			<Row className="justify-content-center">
				<Col lg="6">
					<Doughnut redraw data={data} options={chartOptions} />
				</Col>
			</Row>
		</div>
	);
};
export default SolLaunchpadDetailTokenMetrics;
