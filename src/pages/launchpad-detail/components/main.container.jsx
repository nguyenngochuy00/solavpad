import { useState } from "react"
import SolLaunchpadDetailTabs from "src/components/organisms/launchpad-detail/tabs"
import SolLaunchpadDetailTemplate from "src/components/templates/launchpad-detail"
import SolLaunchpadDetailDescriptionContainer from "./description.container"
import SolLaunchpadDetailPoolCardContainer from "./pool-card.container"
import SolLaunchpadDetailPoolInfoContainer from "./pool-info.container"
import SolLaunchpadDetailSummaryContainer from "./summary.container"
import SolLaunchpadDetailTekenMetricsContainer from "./token-metrics.container"
import SolLaunchpadDetailYourAllocationContainer from "./your-allocation.container"

const SolLaunchpadDetailMainContainer = () => {
    const TABS = [
        { key: 'Description', text: 'Description' },
        { key: 'PoolInfo', text: 'Pool Info' },
        { key: 'TokenMetrics', text: 'TokenMetrics' },
        { key: 'YourAllocation', text: 'Your Allocation' }
    ]
    const [activeTab, setActiveTab] = useState(TABS[0].key);

    const handleTabChange = (tabKey) => {
        setActiveTab(tabKey);
    }

    return <SolLaunchpadDetailTemplate
        summary={<SolLaunchpadDetailSummaryContainer />}
        poolCard={<SolLaunchpadDetailPoolCardContainer />}
        tabs={<SolLaunchpadDetailTabs tabs={TABS} activeTab={activeTab} onTabChange={handleTabChange} />}
        details={<>
            {
                activeTab === TABS[0].key ? <SolLaunchpadDetailDescriptionContainer /> : <></>
            }
            {
                activeTab === TABS[1].key ? <SolLaunchpadDetailPoolInfoContainer /> : <></>
            }
            {
                activeTab === TABS[2].key ? <SolLaunchpadDetailTekenMetricsContainer /> : <></>
            }
            {
                activeTab === TABS[3].key ? <SolLaunchpadDetailYourAllocationContainer /> : <></>
            }
        </>}
    />
}
export default SolLaunchpadDetailMainContainer