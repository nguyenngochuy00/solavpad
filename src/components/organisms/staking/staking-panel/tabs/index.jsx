import SolTab from "src/components/molecules/tab";
import "./index.scss";

const SolStakingTabs = ({ tabs = [], activeTab, onTabChange }) => {
    return <div className="sol-staking-tabs">
        {tabs.map((tab, index) => <SolTab key={index}
            text={tab.text}
            active={activeTab === tab.key}
            onClick={() => onTabChange(tab.key)}
        />)}
    </div>
}
export default SolStakingTabs