import projects from '../../../constants/project/project.json';
import SolLaunchpadOpening from '../../../components/organisms/launchpad/opening-launchpads';
import { LAUNCHPAD_STATUS } from '../../../constants';

const SolLaunchpadOpeningContainer = () => {
	return (
		<SolLaunchpadOpening
			sectionTitle="Opening Launchpads"
			projectData={
				projects?.data?.filter(
					item => item?.state === LAUNCHPAD_STATUS.OPENING
				)[0]
			}
		/>
	);
};
export default SolLaunchpadOpeningContainer;
