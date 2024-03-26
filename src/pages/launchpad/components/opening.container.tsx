import SolLaunchpadOpening from '../../../components/organisms/launchpad/opening-launchpads';
import { LAUNCHPAD_STATUS } from '../../../constants';
import { ProjectDetail } from '../../../types';

interface SolLaunchpadOpeningContainerProps {
	projects: ProjectDetail[];
}

const SolLaunchpadOpeningContainer = ({projects }: SolLaunchpadOpeningContainerProps) => {
	
	return (
		<SolLaunchpadOpening
			sectionTitle="Opening Launchpads"
			projectData={projects}
			
		/>
	);
};
export default SolLaunchpadOpeningContainer;
