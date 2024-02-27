import SolTab from "src/components/molecules/tab";
import "./index.scss";

const SolLaunchpadDetailTabs = ({ tabs = [], activeTab, onTabChange }) => {
    return <div className="sol-launchpad-detail-tabs">
        {tabs.map((tab, index) => <SolTab key={index}
            text={tab.text}
            active={activeTab === tab.key}
            disabled={tab.disabled}
            onClick={() => onTabChange(tab.key)}
        />)}
    </div>
}
export default SolLaunchpadDetailTabs