import { Col, Row } from 'react-bootstrap';
import SolPoolCard from '../../common/pool-card';
import './index.scss';
import { LAUNCHPAD_STATUS } from 'src/constants';

const SolLaunchpadCompleted = ({ sectionTitle = '', projects }) => {
	return (
		<>
			{sectionTitle ? <h3>{sectionTitle}</h3> : <></>}
			<div className="sol-launchpad-completed">
				<Row>
					{projects
						.filter(item => item?.state === LAUNCHPAD_STATUS.COMPLETED)
						.map((project, index) => (
							<Col key={index} xxl="4" lg="6">
								<SolPoolCard
									projectData={project}
									status={LAUNCHPAD_STATUS.COMPLETED}
								/>
							</Col>
						))}
				</Row>
			</div>
		</>
	);
};
export default SolLaunchpadCompleted;
