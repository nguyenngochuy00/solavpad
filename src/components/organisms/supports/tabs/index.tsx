// import SolTab from "src/components/molecules/tab";
import { TabType } from '../../../../types';
import SolTab from '../../../molecules/tab';
import './index.scss';

interface SolSupportsTabsProps {
	tabs: TabType[];
	activeTab: string;
	onTabChange: (tab: string) => void;
}

const SolSupportsTabs: React.FC<SolSupportsTabsProps> = ({
	tabs,
	activeTab,
	onTabChange
}: SolSupportsTabsProps) => {
	const handleTabChange = (tab: string) => {
		if (onTabChange) {
			onTabChange(tab);
		}
	};
	return (
		<div className="sol-support-tabs">
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
export default SolSupportsTabs;
