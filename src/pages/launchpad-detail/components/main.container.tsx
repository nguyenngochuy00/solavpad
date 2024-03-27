import { useState, useEffect } from 'react';
import SolLaunchpadDetailDescriptionContainer from './description.container';
import SolLaunchpadDetailPoolCardContainer from './pool-card.container';
import SolLaunchpadDetailPoolInfoContainer from './pool-info.container';
import SolLaunchpadDetailSummaryContainer from './summary.container';
import SolLaunchpadDetailTokenMetricsContainer from './token-metrics.container';
import SolLaunchpadDetailYourAllocationContainer from './your-allocation.container';
import { useNavigate, useParams } from 'react-router-dom';
import { find } from 'lodash';
// import projects from '../../../constants/project/project.json';
import SolLaunchpadDetailTabs from '../../../components/organisms/launchpad-detail/tabs';
import SolLaunchpadDetailTemplate from '../../../components/templates/launchpad-detail';
import { APP_ROUTES } from '../../../constants';
import { IdoInfoType, ProjectDetail, TabType } from '../../../types';
import { solaUtils } from '../../../services/blockchain/solana.web3';
import { getProjectDetailById } from '../../../redux/services/project';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletInfo } from '../../../types/ido.type';


interface SolLaunchpadDetailMainContainerProps {
	projectSelected: ProjectDetail | undefined
}
const SolLaunchpadDetailMainContainer: React.FC<SolLaunchpadDetailMainContainerProps> = ({projectSelected}: SolLaunchpadDetailMainContainerProps) => {

	const [showJoinModal, setShowJoinModal] = useState<boolean>(false);
	const [showApproveModal, setShowApproveModal] = useState<boolean>(false);

	const connection = useConnection();
	const { publicKey } = useWallet();
	const [walletInfo, setWalletInfo] = useState<WalletInfo>();
	const [allocations, setAllocations] = useState<any[]>([]);

	//DOING
	useEffect(() => {
		if (!connection || !publicKey || !projectSelected)  return;
	
		
		
	  }, [connection, publicKey, projectSelected?.contract]);

	  useEffect(() => {
		const fetchData = async () => {
			if (!projectSelected?.contract || !publicKey ) return;
			const result = await solaUtils.getWalletInfo(projectSelected.contract, publicKey);

			console.log('result', result);
			
			setWalletInfo(result);
		};
		fetchData();
	  }, [projectSelected?.contract]);







	const TABS: TabType[] = [
		{ key: 'Description', text: 'Description' },
		{ key: 'PoolInfo', text: 'Pool Info' },
		{ key: 'TokenMetrics', text: 'TokenMetrics' },
		{ key: 'YourAllocation', text: 'Your Allocation' }
	];
	const [activeTab, setActiveTab] = useState<string>(TABS[1].key);


	const handleTabChange = (tabKey: string) => {
		setActiveTab(tabKey);
	};

	return (
		<SolLaunchpadDetailTemplate
			summary={<SolLaunchpadDetailSummaryContainer data={projectSelected} />}
			poolCard={<SolLaunchpadDetailPoolCardContainer data={projectSelected}/>}
			tabs={
				<SolLaunchpadDetailTabs
					tabs={TABS}
					activeTab={activeTab}
					onTabChange={handleTabChange}
				/>
			}
			details={
				<>
					{ activeTab === TABS[0].key && 
						<SolLaunchpadDetailDescriptionContainer />
					}
					{ activeTab === TABS[1].key && 
						<SolLaunchpadDetailPoolInfoContainer projectInfo={projectSelected} / >
					}
					{/* { activeTab === TABS[2].key && 
						<SolLaunchpadDetailTokenMetricsContainer data={projectSelected?.tokenmetrics}/>
					} */}
					{ activeTab === TABS[3].key && 
						<SolLaunchpadDetailYourAllocationContainer data={allocations} claimable={false}/>
					}
					
				</>
			}
		/>
	);
};
export default SolLaunchpadDetailMainContainer;
