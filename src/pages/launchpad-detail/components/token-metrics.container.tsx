// import SolLaunchpadDetailTokenMetrics from "src/components/organisms/launchpad-detail/token-metrics"

import SolLaunchpadDetailTokenMetrics from '../../../components/organisms/launchpad-detail/token-metrics';
import { TokenMetricsType } from '../../../types';

interface SolLaunchpadDetailTokenMetricsContainerProps {
	data: TokenMetricsType ;
}

const SolLaunchpadDetailTokenMetricsContainer: React.FC<SolLaunchpadDetailTokenMetricsContainerProps> = (props: SolLaunchpadDetailTokenMetricsContainerProps) => {
	const OPTIONS = {
		plugins: {
			legend: {
				position: 'right',
				labels: {
					color: 'white'
				}
			}
		}
	};
	return (
		<SolLaunchpadDetailTokenMetrics data={props.data} chartOptions={OPTIONS} />
	);
};
export default SolLaunchpadDetailTokenMetricsContainer;
