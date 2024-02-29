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
    const [activeTab, setActiveTab] = useState(TABS[1].key);
    const DATA = {
        poolInfo: {
            name: 'Cryptopolis (Blue Diamond Private)',
            symbol: 'CPO',
            opens: '01-31 09:01 UTC',
            fcfsOpens: '01-31 13:46 UTC',
            closes: '01-31 15:01 UTC',
            swapRate: '1 BUSD = 125.0000 CPO',
            cap: '100,000 BUSD',
            totalUsersParticipated: 243,
            totalFundsSwapped: '100,095.8583 BUSD',
            accessType: 'Private',
            schedule: [
                { round: 'Allocation', opens: '2021-10-18 08:00:00 UTC', closes: '2021-10-18 08:00:00 UTC' },
                { round: 'FCFS - Prepare', opens: '2021-10-18 08:00:00 UTC', closes: '2021-10-18 08:00:00 UTC' },
                { round: 'FCFS - Prepare', opens: '2021-10-18 08:00:00 UTC', closes: '2021-10-18 08:00:00 UTC' },
            ]
        },
        tokenMetrics: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        '#e250e5',
                        '#8350e6',
                        '#4b50e6',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderColor: [
                        'rgba(255, 255, 255, 0.1)',
                        'rgba(255, 255, 255, 0.1)',
                        'rgba(255, 255, 255, 0.1)',
                        'rgba(255, 255, 255, 0.1)',
                        'rgba(255, 255, 255, 0.1)',
                        'rgba(255, 255, 255, 0.1)',
                    ],
                    borderWidth: 1,
                },
            ],
        },
        allocations: [
            { value: "9.9999 BUSD", percent: "1.00%", claimed: "0.9999 BUSD", time: "21-10-25 15:00 to 22-08-25 15:00" },
            { value: "9.9999 BUSD", percent: "1.00%", claimed: "0.9999 BUSD", time: "21-10-25 15:00 to 22-08-25 15:00" },
            { value: "9.9999 BUSD", percent: "1.00%", claimed: "0.9999 BUSD", time: "21-10-25 15:00 to 22-08-25 15:00" },
            { value: "9.9999 BUSD", percent: "1.00%", claimed: "0.9999 BUSD", time: "21-10-25 15:00 to 22-08-25 15:00" },
        ]
    }

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
                activeTab === TABS[1].key ? <SolLaunchpadDetailPoolInfoContainer
                    data={DATA.poolInfo}
                /> : <></>
            }
            {
                activeTab === TABS[2].key ?
                    <SolLaunchpadDetailTekenMetricsContainer
                        data={DATA.tokenMetrics}
                    /> : <></>
            }
            {
                activeTab === TABS[3].key ?
                    <SolLaunchpadDetailYourAllocationContainer
                        data={DATA.allocations}
                        claimable={false} /> : <></>
            }
        </>}
    />
}
export default SolLaunchpadDetailMainContainer