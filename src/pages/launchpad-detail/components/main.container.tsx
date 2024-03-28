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



interface SolLaunchpadDetailMainContainerProps {
	projectSelected: ProjectDetail | undefined
}
const SolLaunchpadDetailMainContainer: React.FC<SolLaunchpadDetailMainContainerProps> = ({projectSelected}: SolLaunchpadDetailMainContainerProps) => {




	const [allocations, setAllocations] = useState<any[]>([]);




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
						<SolLaunchpadDetailYourAllocationContainer data={allocations} claimable={false}/>
					}
					
				</>
			}
		/>
	);
};
export default SolLaunchpadDetailMainContainer;
