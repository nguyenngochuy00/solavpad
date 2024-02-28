import { Col, Row } from 'react-bootstrap';
import SolPoolCard from '../../common/pool-card';
import './index.scss';

const SolLaunchpadCompleted = ({ sectionTitle = '', projects }) => {
	return (
		<>
			{sectionTitle ? <h3>{sectionTitle}</h3> : <></>}
			<div className="sol-launchpad-completed">
				<Row>
					{projects.map((project, index) => (
						<Col key={index} xxl="4" lg="6">
							<SolPoolCard projectData={project} />
						</Col>
					))}
				</Row>
			</div>
		</>
	);
};
export default SolLaunchpadCompleted;
