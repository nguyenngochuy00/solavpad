// import SolStakingTemplate from "src/components/templates/staking";
import { useSelector } from 'react-redux';
import OverlayLoading from '../../../components/molecules/overlay-loading';
import SolStakingTemplate from '../../../components/templates/staking';
import { AppState } from '../../../redux/rootReducer';
import SolStakingHeaderContainer from './header.container';
import SolStakingPanelContainer from './staking-panel.container';
import SolStakingYourInformationContainer from './your-information.container';
import { useEffect } from 'react';
import { stakingWeb3Utils } from '../../../services/blockchain';
import { useWallet } from '@solana/wallet-adapter-react';

const SolStakingMainContainer: React.FC = () => {
	const isLoading = useSelector(
		(state: AppState) => state.staking.isLoadingTransaction
	);
	const {publicKey} = useWallet()
	useEffect(() => {
		if(!publicKey) return;
		stakingWeb3Utils.getStakingWalletInfo(publicKey).then((data : any) => {
			console.log("StakingWalletInfo", data);
		})
		stakingWeb3Utils.getStakingInfo().then((data : any) => {
			console.log("getStakingInfo", data);
			
		})
	},[
		publicKey
	])

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
