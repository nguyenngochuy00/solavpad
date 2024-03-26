// import SolLaunchpadTemplate from "src/components/templates/launchpad"
import SolLaunchpadTemplate from '../../../components/templates/launchpad';
import { ProjectDetail } from '../../../types';
import SolLaunchpadBannerContainer from './banner.container';
import SolLaunchpadCompletedContainer from './completed.container';
import SolLaunchpadOpeningContainer from './opening.container';
import SolLaunchpadUpcomingContainer from './upcoming.container';

interface SolLaunchpadMainContainerProps {
	projects: ProjectDetail[];
}

const SolLaunchpadMainContainer = ({
	projects
}: SolLaunchpadMainContainerProps) => {
	//get project from api
	//split project to opening, upcoming, completed

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
