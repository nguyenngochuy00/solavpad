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
	return (
		<SolLaunchpadTemplate
			banner={<SolLaunchpadBannerContainer />}
			section1={
				<SolLaunchpadOpeningContainer
					projects={projects?.filter(
						item => item.state == 'O' || item.state == 'F'
					)}
				/>
			}
			section2={
				<SolLaunchpadUpcomingContainer
					projects={projects?.filter(item => item.state == 'P')}
				/>
			}
			section3={
				<SolLaunchpadCompletedContainer
					projects={projects?.filter(item => item.state == 'C')}
				/>
			}
		/>
	);
};
export default SolLaunchpadMainContainer;
