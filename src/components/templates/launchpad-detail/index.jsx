import SolLaunchpadDetailApproveDialog from "src/components/organisms/launchpad-detail/approve-dialog";
import SolLaunchpadDetailDescription from "src/components/organisms/launchpad-detail/description";
import SolLaunchpadDetailJoinPoolDialog from "src/components/organisms/launchpad-detail/join-pool-dialog";
import SolLaunchpadDetailPoolCard from "src/components/organisms/launchpad-detail/pool-card";
import SolLaunchpadDetailPoolInfo from "src/components/organisms/launchpad-detail/pool-info";
import SolLaunchpadDetailSummary from "src/components/organisms/launchpad-detail/summary";
import SolLaunchpadDetailTokenMetrics from "src/components/organisms/launchpad-detail/token-metrics";
import SolLaunchpadDetailAllocation from "src/components/organisms/launchpad-detail/your-allocation";
import "./index.scss";

const SolLaunchpadDetailTemplate = () => {
    return <div className="sol-launchpad-detail-template">
        <SolLaunchpadDetailSummary />
        <SolLaunchpadDetailPoolCard />
        <div className="sol-launchpad-detail-tabs"></div>
        <SolLaunchpadDetailDescription />
        <SolLaunchpadDetailPoolInfo />
        <SolLaunchpadDetailTokenMetrics />
        <SolLaunchpadDetailAllocation />
        <SolLaunchpadDetailJoinPoolDialog />
        <SolLaunchpadDetailApproveDialog />
    </div>
}
export default SolLaunchpadDetailTemplate