import { Buffer } from "buffer";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/organisms/common/scroll-to-top";

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
          <Route path="*" element={<Error404Page />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/launchpad" element={<SolLaunchpadPage />} />
          <Route path="/staking" element={<SolStakingPage />} />
          <Route path="/bridge" element={<SolBridgePage />} />
          <Route path="/support" element={<SolSupportPage />} />
        </Routes>
      </Suspense>
    </ScrollToTop>
  );
};

export default AppRoutes;
