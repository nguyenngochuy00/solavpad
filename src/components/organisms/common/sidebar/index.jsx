import SolLogo from "../../../molecules/logo";
import SolSidebarItem from "../../../molecules/sidebar-item";
import "./index.scss";

const SolSidebar = () => {
    return <div className="sol-sidebar">
        <SolLogo />
        <SolSidebarItem />
        <SolSidebarItem />
    </div>
}
export default SolSidebar