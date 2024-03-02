import SolLaunchpadCompleted from 'src/components/organisms/launchpad/completed-launchpads';
import { APP_ROUTES, LAUNCHPAD_STATUS } from 'src/constants';
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
