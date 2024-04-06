import { useState } from 'react';
import SolStakingTabs from '../../../components/organisms/staking/staking-panel/tabs';
import { TabType } from '../../../types';
import SolStakingStakeContainer from './stake.container';
import SolStakingUnstakeContainer from './unstake.container';
import SolStakingWithdrawContainer from './withdraw.container';

const SolStakingPanelContainer: React.FC = () => {
	const TABS: TabType[] = [
		{ key: 'stake', text: 'Stake' },
		{ key: 'unstake', text: 'Unstake' },
		{ key: 'withdraw', text: 'Withdraw' }
	];
	const [activeTab, setActiveTab] = useState<string>(TABS[0].key);

	const handleTabChange = (tabKey : string) => {
		setActiveTab(tabKey);
	};

	return (
		<>
			<SolStakingTabs
				tabs={TABS}
				activeTab={activeTab}
				onTabChange={handleTabChange}
			/>
			{activeTab === TABS[0].key ? <SolStakingStakeContainer /> : <></>}
			{activeTab === TABS[1].key ? <SolStakingUnstakeContainer /> : <></>}
			{activeTab === TABS[2].key ? <SolStakingWithdrawContainer /> : <></>}
		</>
	);
};
export default SolStakingPanelContainer;
