import { useState } from "react";
import SolStakingTabs from "src/components/organisms/staking/staking-panel/tabs";
import SolStakingStakeContainer from "./stake.container";
import SolStakingUnstakeContainer from "./unstake.container";
import SolStakingWithdrawContainer from "./withdraw.container";

const SolStakingPanelContainer = () => {
    const TABS = [
        { key: 'stake', text: 'Stake' },
        { key: 'unstake', text: 'Unstake', disabled: true },
        { key: 'withdraw', text: 'Withdraw' }
    ]
    const [activeTab, setActiveTab] = useState(TABS[0].key);

    const handleTabChange = (tabKey) => {
        setActiveTab(tabKey);
    }

    return <>
        <SolStakingTabs
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={handleTabChange}
        />
        {
            activeTab === TABS[0].key ? <SolStakingStakeContainer /> : <></>
        }
        {
            activeTab === TABS[1].key ? <SolStakingUnstakeContainer /> : <></>
        }
        {
            activeTab === TABS[2].key ? <SolStakingWithdrawContainer /> : <></>
        }
    </>
}
export default SolStakingPanelContainer