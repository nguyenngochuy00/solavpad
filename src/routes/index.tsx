import { Buffer } from 'buffer';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from '../components/organisms/common/scroll-to-top';
import { APP_ROUTES } from '../constants';
import SolDesktopPage from '../pages/base/desktop';
import SolBridgePage from '../pages/bridge';
import Error404Page from '../pages/error-page/error-404';
import SolHomepage from '../pages/homepage';
import SolLaunchpadPage from '../pages/launchpad';
import SolLaunchpadDetailPage from '../pages/launchpad-detail';
import SolStakingPage from '../pages/staking';
import SolSupportsPage from '../pages/supports';

window.Buffer = Buffer;

function AppRoutes() {
	return (
		<ScrollToTop>
			<Suspense fallback={<></>}>
				<Routes>
					<Route path="/*" element={<SolDesktopPage />}>
						<Route
							path={APP_ROUTES.HOMEPAGE.path}
							element={<SolHomepage />}
							index />
						<Route
							path={APP_ROUTES.LAUNCHPAD.path}
							element={<SolLaunchpadPage />} />
						<Route
							path={APP_ROUTES.LAUNCHPAD_DETAIL.path}
							element={<SolLaunchpadDetailPage />} />
						<Route
							path={APP_ROUTES.STAKING.path}
							element={<SolStakingPage />} />
						<Route path={APP_ROUTES.BRIDGE.path} element={<SolBridgePage />} />
						<Route
							path={APP_ROUTES.SUPPORTS.path}
							element={<SolSupportsPage />} />
						<Route path="*" element={<Error404Page />} />
					</Route>
				</Routes>
			</Suspense>
		</ScrollToTop>
	);
}

export default AppRoutes;
