import './index.scss';
import SolPoolCard from '../../common/pool-card';

const SolLaunchpadUpcoming = ({ sectionTitle = '', projects }) => {
	return (
		<>
			{sectionTitle ? <h3>{sectionTitle}</h3> : <></>}
			<div className="sol-launchpad-upcoming">
				{projects.map((project, index) => (
					<SolPoolCard key={index} projectData={project} />
				))}
			</div>
		</>
	);
};
export default SolLaunchpadUpcoming;
