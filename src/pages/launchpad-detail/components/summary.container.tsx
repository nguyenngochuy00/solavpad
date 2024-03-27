import { get } from 'lodash';
// import SolLaunchpadDetailSummary from 'src/components/organisms/launchpad-detail/summary';
// import { getProjectStatusTag } from 'src/services/helpers';
import SolLaunchpadDetailSummary from '../../../components/organisms/launchpad-detail/summary';
import { getProjectStatusTag } from '../../../services/helpers/helpers';
import { ProjectDetail } from '../../../types';


interface SolLaunchpadDetailSummaryContainerProps {
	data: ProjectDetail | undefined
}

const SolLaunchpadDetailSummaryContainer: React.FC<SolLaunchpadDetailSummaryContainerProps> = ({ data }) => {
	return (
		<SolLaunchpadDetailSummary
			imgURL={get(data, 'logo', '')} //sửa thành images [] cho tự chạy
			networkIcon="../images/images/Solana_logo_1.png"
			networkName="SOLANA"
			title={get(data, 'name', '')}
			status={getProjectStatusTag(data?.state || '')}
			description={data?.description}
			telegram={data?.telegram}
			twitter={data?.twitter}
			webURL={data?.website}
		/>
	);
};
export default SolLaunchpadDetailSummaryContainer;
