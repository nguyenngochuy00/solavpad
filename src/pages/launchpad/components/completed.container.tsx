import SolLaunchpadCompleted from '../../../components/organisms/launchpad/completed-launchpads';
import projects from '../../../constants/project/project.json';
import { ProjectDetail } from '../../../types';


interface SolLaunchpadCompletedContainerProps {
	projects: ProjectDetail[];
}
const SolLaunchpadCompletedContainer = ({projects}: SolLaunchpadCompletedContainerProps) => {
	return (
		<SolLaunchpadCompleted
			sectionTitle="Completed Launchpads"
			projects={projects}
		/>
	);
};
export default SolLaunchpadCompletedContainer;
