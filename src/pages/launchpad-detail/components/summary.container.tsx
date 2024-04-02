import { get } from 'lodash';
import { useSelector } from 'react-redux';
import SolLaunchpadDetailSummary from '../../../components/organisms/launchpad-detail/summary';
import { AppState } from '../../../redux/rootReducer';
import { getProjectStatusTag } from '../../../services/helpers/helpers';

const SolLaunchpadDetailSummaryContainer = () => {
	const projectSelected = useSelector(
		(state: AppState) => state.launchpadDetail.launchpad
	);
	return (
		<SolLaunchpadDetailSummary
			imgURL={get(projectSelected, 'logo', '')} //sửa thành images [] cho tự chạy
			networkIcon="../images/images/Solana_logo_1.png"
			networkName="SOLANA"
			title={get(projectSelected, 'name', '')}
			status={getProjectStatusTag(projectSelected?.state || '')}
			description={projectSelected?.description}
			telegram={projectSelected?.telegram}
			twitter={projectSelected?.twitter}
			webURL={projectSelected?.website}
		/>
	);
};
export default SolLaunchpadDetailSummaryContainer;
