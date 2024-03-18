import { get } from 'lodash';
import SolLaunchpadDetailSummary from 'src/components/organisms/launchpad-detail/summary';
import { getProjectStatusTag } from 'src/services/helpers';

const SolLaunchpadDetailSummaryContainer = ({ data }) => {
	return (
		<SolLaunchpadDetailSummary
			imgURL="../images/images/FOTA_2.png"
			networkIcon="../images/images/Solana_logo_1.png"
			networkName="SOLANA"
			title={get(data, 'name', '')}
			status={getProjectStatusTag(data?.state)}
			description={data?.description}
			telegram={data?.telegram}
			twitter={data?.twitter}
			webURL={data?.website}
		/>
	);
};
export default SolLaunchpadDetailSummaryContainer;
