import { get } from "lodash";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import SolSidebar from "../../../../components/organisms/common/sidebar";
import { APP_MENUS, SITE_CONFIGS } from "../../../../constants";
import { toggleDarkMode } from "../../../../redux/actions/applicationAction";
import { getActiveRoute } from "../../../../utils/route.utils";

const SolDesktopSidebarContainer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const darkMode = useSelector((state) =>
        get(state, "system.darkMode", false)
    );

    const activeMenu = useMemo(() => {
        const activeRoute = getActiveRoute(location);
        return activeRoute?.url;
    }, [location])

    const handleMenuClick = (menu) => {
        navigate(menu.url);
    }

    const handleToggleMode = () => {
        dispatch(toggleDarkMode(!darkMode));
    }

    return <SolSidebar
        expanded
        siteUrl={SITE_CONFIGS.siteUrl}
        siteTitle={SITE_CONFIGS.siteTitle}
        logoImage={SITE_CONFIGS.logoImage}
        menus={APP_MENUS}
        activeMenu={activeMenu}
        isDarkMode={darkMode}
        onMenuClick={handleMenuClick}
        onToggleMode={handleToggleMode}
    />
}
export default SolDesktopSidebarContainer