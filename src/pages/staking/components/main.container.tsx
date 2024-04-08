// import SolStakingTemplate from "src/components/templates/staking";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OverlayLoading from '../../../components/molecules/overlay-loading';
import SolStakingTemplate from '../../../components/templates/staking';
import { AppState } from '../../../redux/rootReducer';
import { stakingWeb3Utils } from '../../../services/blockchain';
import { StakingInfo } from '../../../types/staking.type';
import { checkIsPause, checkIsValid } from '../redux/actions';
import SolStakingHeaderContainer from './header.container';
import SolStakingPanelContainer from './staking-panel.container';
import SolStakingYourInformationContainer from './your-information.container';

const SolStakingMainContainer: React.FC = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(
		(state: AppState) => state.staking.isLoadingTransaction
	);

	const [stakingInfo, setStakingInfo] = useState<StakingInfo | undefined>(
		undefined
	);
	useEffect(() => {
		stakingWeb3Utils.getStakingInfo().then(result => {
			if (result.pause) {
				dispatch(checkIsPause(true));
				dispatch(checkIsValid(false));
			}
			setStakingInfo(result);
		});
	}, []);

	return (
		<>
			<OverlayLoading loading={isLoading} />
			<SolStakingTemplate
				header={<SolStakingHeaderContainer data={stakingInfo} />}
				leftPanel={<SolStakingPanelContainer />}
				rightPanel={<SolStakingYourInformationContainer />}
			/>
		</>
	);
};
export default SolStakingMainContainer;
