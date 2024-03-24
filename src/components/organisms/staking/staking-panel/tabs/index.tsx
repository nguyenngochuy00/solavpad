// import SolTab from "src/components/molecules/tab";
import SolTab from '../../../../molecules/tab';
import './index.scss';

interface TabItem {
	text: string;
	key: string;
	disabled?: boolean;
}

interface SolStakingTabsProps {
	tabs: TabItem[];
	activeTab?: string;
	onTabChange?: (tab: string) => void;
}

const SolStakingTabs = ({
	tabs = [],
	activeTab,
	onTabChange
}: SolStakingTabsProps) => {
	const handleTabChange = (tab: string) => {
		if (onTabChange) {
			onTabChange(tab);
		}
	};

	return (
		<div className="sol-staking-tabs">
			{tabs.map((tab, index) => (
				<SolTab
					key={index}
					text={tab.text}
					active={activeTab === tab.key}
					disabled={tab.disabled}
					onClick={() => handleTabChange(tab.key)}
				/>
			))}
		</div>
	);
};
export default SolStakingTabs;
