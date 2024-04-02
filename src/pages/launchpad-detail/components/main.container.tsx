import { useState } from 'react';
import SolLaunchpadDetailDescriptionContainer from './description.container';
import SolLaunchpadDetailPoolCardContainer from './pool-card.container';
import SolLaunchpadDetailPoolInfoContainer from './pool-info.container';
import SolLaunchpadDetailSummaryContainer from './summary.container';
import SolLaunchpadDetailYourAllocationContainer from './your-allocation.container';

import SolLaunchpadDetailTabs from '../../../components/organisms/launchpad-detail/tabs';
import SolLaunchpadDetailTemplate from '../../../components/templates/launchpad-detail';
import { TabType } from '../../../types';

const TABS: TabType[] = [
	{ key: 'Description', text: 'Description' },
	{ key: 'PoolInfo', text: 'Pool Info' },
	{ key: 'TokenMetrics', text: 'TokenMetrics' },
	{ key: 'YourAllocation', text: 'Your Allocation' }
];

const SolLaunchpadDetailMainContainer: React.FC = () => {
	const [activeTab, setActiveTab] = useState<string>(TABS[1].key);

	const handleTabChange = (tabKey: string) => {
		setActiveTab(tabKey);
	};

	return (
		<SolLaunchpadDetailTemplate
			summary={<SolLaunchpadDetailSummaryContainer />}
			poolCard={<SolLaunchpadDetailPoolCardContainer />}
			tabs={
				<SolLaunchpadDetailTabs
					tabs={TABS}
					activeTab={activeTab}
					onTabChange={handleTabChange}
				/>
			}
			details={
				<>
					{activeTab === TABS[0].key && (
						<SolLaunchpadDetailDescriptionContainer />
					)}
					{activeTab === TABS[1].key && <SolLaunchpadDetailPoolInfoContainer />}
					{/* { activeTab === TABS[2].key && 
						<SolLaunchpadDetailTokenMetricsContainer data={projectSelected?.tokenmetrics}/>
					} */}
					{activeTab === TABS[3].key && (
						<SolLaunchpadDetailYourAllocationContainer />
					)}
				</>
			}
		/>
	);
};
export default SolLaunchpadDetailMainContainer;
