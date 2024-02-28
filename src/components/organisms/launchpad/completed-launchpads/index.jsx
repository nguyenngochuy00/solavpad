import { APP_ROUTES } from 'src/constants';
import SolPoolCard from '../../common/pool-card';
import './index.scss';

const SolLaunchpadCompleted = ({ sectionTitle = '', projects }) => {
	return (
		<>
			{sectionTitle ? <h3>{sectionTitle}</h3> : <></>}
			<div className="sol-launchpad-completed">
				{projects.map((project, index) => (
					<SolPoolCard key={index} projectData={project} />
				))}
			</div>
		</>
	);
};
export default SolLaunchpadCompleted;
