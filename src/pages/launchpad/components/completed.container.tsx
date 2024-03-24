import SolLaunchpadCompleted from '../../../components/organisms/launchpad/completed-launchpads';
import projects from '../../../constants/project/project.json';

const SolLaunchpadCompletedContainer = () => {
	return (
		<SolLaunchpadCompleted
			sectionTitle="Completed Launchpads"
			projects={projects?.data}
		/>
	);
};
export default SolLaunchpadCompletedContainer;
