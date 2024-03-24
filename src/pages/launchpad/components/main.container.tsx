// import SolLaunchpadTemplate from "src/components/templates/launchpad"
import SolLaunchpadTemplate from '../../../components/templates/launchpad';
import SolLaunchpadBannerContainer from './banner.container';
import SolLaunchpadCompletedContainer from './completed.container';
import SolLaunchpadOpeningContainer from './opening.container';
import SolLaunchpadUpcomingContainer from './upcoming.container';

const SolLaunchpadMainContainer = () => {
	return (
		<SolLaunchpadTemplate
			banner={<SolLaunchpadBannerContainer />}
			section1={<SolLaunchpadOpeningContainer />}
			section2={<SolLaunchpadUpcomingContainer />}
			section3={<SolLaunchpadCompletedContainer />}
		/>
	);
};
export default SolLaunchpadMainContainer;
