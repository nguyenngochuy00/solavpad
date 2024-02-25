import { Buffer } from "buffer";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/organisms/common/scroll-to-top";
import SolDesktopPage from "../pages/base/desktop";
import SolBridgePage from "../pages/bridge";
import Error404Page from "../pages/error-page/error-404";
import SolHomepage from "../pages/homepage";
import SolLaunchpadPage from "../pages/launchpad";
import SolLaunchpadDetailPage from "../pages/launchpad-detail";
import SolStakingPage from "../pages/staking";
import SolSupportPage from "../pages/support";

window.Buffer = Buffer;

const AppRoutes = () => {
  return (
    <ScrollToTop>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/*" element={<SolDesktopPage />}>
            <Route path="" element={<SolHomepage />} index />
            <Route path="launchpad" element={<SolLaunchpadPage />} />
            <Route path="launchpad/:id" element={<SolLaunchpadDetailPage />} />
            <Route path="staking" element={<SolStakingPage />} />
            <Route path="bridge" element={<SolBridgePage />} />
            <Route path="support" element={<SolSupportPage />} />
            <Route path="*" element={<Error404Page />} />
          </Route>
        </Routes>
      </Suspense>
    </ScrollToTop>
  );
};

export default AppRoutes;
