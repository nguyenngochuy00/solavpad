import { get } from 'lodash';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import SolSidebar from '../../../../components/organisms/common/sidebar';
import { APP_MENUS, SITE_CONFIGS } from '../../../../constants';
import useIsMobile from '../../../../hooks/useIsMobile';
import {
	toggleDarkMode,
	toggleSidebar
} from '../../../../redux/application/actions';
import { AppState } from '../../../../redux/rootReducer';
import { getActiveRoute } from '../../../../services/utils/route.utils';

const SolDesktopSidebarContainer = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isMobile = useIsMobile();
	const sidebarExpaned = useSelector((state: AppState) => state.application.sidebarExpaned);
	const darkMode = useSelector((state: AppState) => state.application.darkMode);

	
	const activeMenu = useMemo(() => {
		const activeRoute = getActiveRoute(location);
		return activeRoute?.url;
	}, [location]);

	useEffect(() => {
		dispatch(toggleSidebar(isMobile ? false : true));
	}, [dispatch, isMobile]);

	const handleMenuClick = (menu: any) => {
		collapseSidebar();
		navigate(menu.url);
	};

	const handleToggleMode = () => {
		dispatch(toggleDarkMode(!darkMode));
	};

	const collapseSidebar = () => {
		if (isMobile) {
			dispatch(toggleSidebar(false));
		}
	};

	return (
		<SolSidebar
			expanded={sidebarExpaned}
			siteUrl={SITE_CONFIGS.siteUrl}
			siteTitle={SITE_CONFIGS.siteTitle}
			logoImage={SITE_CONFIGS.logoImage}
			menus={APP_MENUS}
			activeMenu={activeMenu}
			isDarkMode={darkMode}
			onMenuClick={handleMenuClick}
			onToggleMode={handleToggleMode}
			onLogoClick={collapseSidebar}
			onOverlayClick={collapseSidebar}
		/>
	);
};
export default SolDesktopSidebarContainer;
