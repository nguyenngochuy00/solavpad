// import SolLaunchpadDetailTokenMetrics from "src/components/organisms/launchpad-detail/token-metrics"

import SolLaunchpadDetailTokenMetrics from '../../../components/organisms/launchpad-detail/token-metrics';
import { TokenMetricsType } from '../../../types';

interface SolLaunchpadDetailTekenMetricsContainerProps {
	data: TokenMetricsType;
}

const SolLaunchpadDetailTekenMetricsContainer: React.FC<
	SolLaunchpadDetailTekenMetricsContainerProps
> = (props: SolLaunchpadDetailTekenMetricsContainerProps) => {
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
export default SolLaunchpadDetailTekenMetricsContainer;
