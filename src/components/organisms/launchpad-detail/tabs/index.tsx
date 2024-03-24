// import SolTab from 'src/components/molecules/tab';
import { TabType } from '../../../../types';
import SolTab from '../../../molecules/tab';
import './index.scss';

interface SolLaunchpadDetailTabsProps {
	tabs: TabType[];
	activeTab: any;
	onTabChange: any;
}

const SolLaunchpadDetailTabs = ({
	tabs = [],
	activeTab,
	onTabChange
}: SolLaunchpadDetailTabsProps) => {
	return (
		<div className="sol-launchpad-detail-tabs">
			{tabs.map((tab, index) => (
				<SolTab
					key={index}
					text={tab.text}
					active={activeTab === tab.key}
					disabled={tab.disabled}
					onClick={() => onTabChange(tab.key)}
				/>
			))}
		</div>
	);
};
export default SolLaunchpadDetailTabs;
