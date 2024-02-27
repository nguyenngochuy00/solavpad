import { Buffer } from "buffer";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "src/components/organisms/common/scroll-to-top";
import { APP_ROUTES } from "src/constants";
import SolDesktopPage from "src/pages/base/desktop";
import SolBridgePage from "src/pages/bridge";
import Error404Page from "src/pages/error-page/error-404";
import SolHomepage from "src/pages/homepage";
import SolLaunchpadPage from "src/pages/launchpad";
import SolLaunchpadDetailPage from "src/pages/launchpad-detail";
import SolStakingPage from "src/pages/staking";
import SolSupportsPage from "src/pages/supports";

window.Buffer = Buffer;

const AppRoutes = () => {
  return (
    <ScrollToTop>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/*" element={<SolDesktopPage />}>
            <Route path={APP_ROUTES.HOMEPAGE.path} element={<SolHomepage />} index />
            <Route path={APP_ROUTES.LAUNCHPAD.path} element={<SolLaunchpadPage />} />
            <Route path={APP_ROUTES.LAUNCHPAD_DETAIL.path} element={<SolLaunchpadDetailPage />} />
            <Route path={APP_ROUTES.STAKING.path} element={<SolStakingPage />} />
            <Route path={APP_ROUTES.BRIDGE.path} element={<SolBridgePage />} />
            <Route path={APP_ROUTES.SUPPORTS.path} element={<SolSupportsPage />} />
            <Route path="*" element={<Error404Page />} />
          </Route>
        </Routes>
      </Suspense>
    </ScrollToTop>
  );
};

export default AppRoutes;
