// import SolLaunchpadUpcoming from 'src/components/organisms/launchpad/upcoming-launchpads';
import SolLaunchpadUpcoming from '../../../components/organisms/launchpad/upcoming-launchpads';
import projects from '../../../constants/project/project.json';

const SolLaunchpadUpcomingContainer = () => {
	return (
		<SolLaunchpadUpcoming
			sectionTitle="Upcoming Launchpads"
			projects={projects.data}
		/>
	);
};
export default SolLaunchpadUpcomingContainer;
