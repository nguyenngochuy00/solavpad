import { Buffer } from "buffer";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/organisms/common/scroll-to-top";
import SolDesktopPage from "../pages/base/desktop";

const Error404Page = lazy(() => import("../pages/error-page/error-404"));
const Homepage = lazy(() => import("../pages/homepage"));
const SolLaunchpadPage = lazy(() => import("../pages/launchpad"));
const SolStakingPage = lazy(() => import("../pages/staking"));
const SolBridgePage = lazy(() => import("../pages/bridge"));
const SolSupportPage = lazy(() => import("../pages/support"));

window.Buffer = Buffer;

const AppRoutes = () => {
  return (
    <ScrollToTop>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/*" element={<SolDesktopPage />}>
            <Route path="" element={<Homepage />} index />
            <Route path="launchpad" element={<SolLaunchpadPage />} />
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
