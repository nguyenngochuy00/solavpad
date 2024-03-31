import { useState, useEffect } from 'react';
import SolLaunchpadDetailDescriptionContainer from './description.container';
import SolLaunchpadDetailPoolCardContainer from './pool-card.container';
import SolLaunchpadDetailPoolInfoContainer from './pool-info.container';
import SolLaunchpadDetailSummaryContainer from './summary.container';
import SolLaunchpadDetailTokenMetricsContainer from './token-metrics.container';
import SolLaunchpadDetailYourAllocationContainer from './your-allocation.container';

import SolLaunchpadDetailTabs from '../../../components/organisms/launchpad-detail/tabs';
import SolLaunchpadDetailTemplate from '../../../components/templates/launchpad-detail';
import { APP_ROUTES } from '../../../constants';
import { IdoInfoType, ProjectDetail, TabType } from '../../../types';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { solaUtils } from '../../../services/blockchain';
import { CalculateAllowInfoResult } from '../../../types/ido.type';



interface SolLaunchpadDetailMainContainerProps {
	projectSelected: ProjectDetail | undefined
}
const SolLaunchpadDetailMainContainer: React.FC<SolLaunchpadDetailMainContainerProps> = ({projectSelected}: SolLaunchpadDetailMainContainerProps) => {




	const [allocations, setAllocations] = useState<CalculateAllowInfoResult>({layout:1, infoAllocation:[]});

	const [decimals, setDecimals] = useState<number>(9);
	
	const { publicKey, connected } = useWallet();
	

	useEffect(() => {
		if(!projectSelected?.contract || !publicKey || !connected) return;
		solaUtils.getAllocationsInfo(  projectSelected.contract, publicKey,).then((result) => {
			if(!result) return;
			setAllocations(result);
			setDecimals(projectSelected.decimals)
		});	

	}, [projectSelected, publicKey]);

	
	
	
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
			poolCard={<SolLaunchpadDetailPoolCardContainer projectSelected={projectSelected}/>}
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
						<SolLaunchpadDetailYourAllocationContainer data={allocations} decimals={decimals} contract={projectSelected?.contract || null}/>
					}
					
				</>
			}
		/>
	);
};
export default SolLaunchpadDetailMainContainer;
