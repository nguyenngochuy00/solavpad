import SolLaunchpadBanner from "../../organisms/launchpad/banner";
import SolLaunchpadCompleted from "../../organisms/launchpad/completed-launchpads";
import SolLaunchpadOpening from "../../organisms/launchpad/opening-launchpads";
import SolLaunchpadUpcoming from "../../organisms/launchpad/upcoming-launchpads";
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