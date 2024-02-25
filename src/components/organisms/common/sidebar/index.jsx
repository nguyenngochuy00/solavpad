import SolLogo from "../../../molecules/logo";
import SolSidebarItem from "../../../molecules/sidebar-item";
import "./index.scss";

const SolSidebar = () => {
    return <div className="sol-sidebar">
        <SolLogo
            siteUrl="/"
            siteTitle="Solav"
            logoImage="/images/logo.png"
        />
        <SolSidebarItem />
        <SolSidebarItem />
    </div>
}
export default SolSidebar