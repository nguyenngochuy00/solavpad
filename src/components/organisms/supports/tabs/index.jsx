import SolTab from "src/components/molecules/tab";
import "./index.scss";

const SolSupportsTabs = ({ tabs, activeTab, onTabChange }) => {
    return <div className="sol-support-tabs">
        {tabs.map((tab, index) => <SolTab key={index}
            text={tab.text}
            active={activeTab === tab.key}
            disabled={tab.disabled}
            onClick={() => onTabChange(tab.key)}
        />)}
    </div>
}
export default SolSupportsTabs