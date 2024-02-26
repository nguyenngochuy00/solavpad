import SolLaunchpadBanner from "src/components/organisms/launchpad/banner";
import SolLaunchpadCompleted from "src/components/organisms/launchpad/completed-launchpads";
import SolLaunchpadOpening from "src/components/organisms/launchpad/opening-launchpads";
import SolLaunchpadUpcoming from "src/components/organisms/launchpad/upcoming-launchpads";
import "./index.scss";

const SolLaunchpadTemplate = () => {
    return <div className="sol-launchpad-template">
        <SolLaunchpadBanner />
        <SolLaunchpadOpening />
        <SolLaunchpadUpcoming />
        <SolLaunchpadCompleted />
    </div>
}
export default SolLaunchpadTemplate