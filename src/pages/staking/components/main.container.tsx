// import SolStakingTemplate from "src/components/templates/staking";
import { useSelector } from 'react-redux';
import OverlayLoading from '../../../components/molecules/overlay-loading';
import SolStakingTemplate from '../../../components/templates/staking';
import { AppState } from '../../../redux/rootReducer';
import SolStakingHeaderContainer from './header.container';
import SolStakingPanelContainer from './staking-panel.container';
import SolStakingYourInformationContainer from './your-information.container';

const SolStakingMainContainer: React.FC = () => {
	const isLoading = useSelector(
		(state: AppState) => state.staking.isLoadingTransaction
	);

	return (
		<>
			<OverlayLoading loading={isLoading} />
			<SolStakingTemplate
				header={<SolStakingHeaderContainer />}
				leftPanel={<SolStakingPanelContainer />}
				rightPanel={<SolStakingYourInformationContainer />}
			/>
		</>
	);
};
export default SolStakingMainContainer;
