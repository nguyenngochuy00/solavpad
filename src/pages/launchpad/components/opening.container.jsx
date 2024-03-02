import SolLaunchpadOpening from 'src/components/organisms/launchpad/opening-launchpads';
import projects from '../../../constants/project/project.json';
import { LAUNCHPAD_STATUS } from 'src/constants';

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
