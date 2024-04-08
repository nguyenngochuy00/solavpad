// import SolTab from "src/components/molecules/tab";
import { useSelector } from 'react-redux';
import { AppState } from '../../../../../redux/rootReducer';
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
	onTabChange,
}: SolStakingTabsProps) => {

	const isPause = useSelector((state: AppState) => state.staking.isPause)

	const handleTabChange = (tab: string) => {
		if (onTabChange) {
			onTabChange(tab);
		}
	};

	return (
		<>
			{isPause ? (
				<div
					className="d-flex justify-content-center align-items-center"
					style={{ flexDirection: 'column' }}
				>
					<img
						className={'mt-3 mb-3'}
						width={60}
						height={60}
						src={'/images/icons/warning.svg'}
						alt=""
					/>
					<h3
						className="text-white"
						style={{ fontSize: '20px', fontWeight: 600 }}
					>
						All staking functions are temporarily paused. Please check back
						again later.{' '}
					</h3>
				</div>
			) : (
				<></>
			)}

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
		</>
	);
};
export default SolStakingTabs;
