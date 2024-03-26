// import SolLaunchpadUpcoming from 'src/components/organisms/launchpad/upcoming-launchpads';
import SolLaunchpadUpcoming from '../../../components/organisms/launchpad/upcoming-launchpads';
import projects from '../../../constants/project/project.json';
import { ProjectDetail } from '../../../types';


interface SolLaunchpadUpcomingContainerProps {
	projects: ProjectDetail[];
}
const SolLaunchpadUpcomingContainer = ({projects}: SolLaunchpadUpcomingContainerProps) => {
	return (
		<SolLaunchpadUpcoming
			sectionTitle="Upcoming Launchpads"
			projects={projects}
		/>
	);
};
export default SolLaunchpadUpcomingContainer;
