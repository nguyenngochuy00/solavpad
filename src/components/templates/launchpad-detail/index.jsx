import SolLaunchpadDetailApproveDialog from "../../organisms/launchpad-detail/approve-dialog";
import SolLaunchpadDetailDescription from "../../organisms/launchpad-detail/description";
import SolLaunchpadDetailJoinPoolDialog from "../../organisms/launchpad-detail/join-pool-dialog";
import SolLaunchpadDetailPoolCard from "../../organisms/launchpad-detail/pool-card";
import SolLaunchpadDetailPoolInfo from "../../organisms/launchpad-detail/pool-info";
import SolLaunchpadDetailSummary from "../../organisms/launchpad-detail/summary";
import SolLaunchpadDetailTokenMetrics from "../../organisms/launchpad-detail/token-metrics";
import SolLaunchpadDetailAllocation from "../../organisms/launchpad-detail/your-allocation";
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