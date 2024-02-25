import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SolSidebar from "../../../../components/organisms/common/sidebar";
import { APP_MENUS } from "../../../../constants";

const SolDesktopSidebarContainer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const menus = useMemo(() => {
        return APP_MENUS.map(menu => {
            const active = location?.pathname === '/' ? menu.key === 'home' : location?.pathname.includes(menu.key);
            return { ...menu, active }
        })
    }, [location])

    const handleMenuClick = (menu) => {
        navigate(menu?.key === 'home' ? '/' : menu.key);
    }

    const handleToggleMode = () => {

    }

    return <SolSidebar
        expanded
        siteUrl="/"
        siteTitle="Solav"
        logoImage="/images/logo.png"
        menus={menus}
        isDarkMode
        onMenuClick={handleMenuClick}
        onToggleMode={handleToggleMode}
    />
}
export default SolDesktopSidebarContainer