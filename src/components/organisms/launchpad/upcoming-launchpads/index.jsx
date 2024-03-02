import { Col, Row } from 'react-bootstrap';
import SolPoolCard from '../../common/pool-card';
import './index.scss';
import { LAUNCHPAD_STATUS } from 'src/constants';

const SolLaunchpadUpcoming = ({ sectionTitle = '', projects }) => {
	return (
		<>
			{sectionTitle ? <h3>{sectionTitle}</h3> : <></>}
			<div className="sol-launchpad-upcoming">
				<Row>
					{projects
						.filter(item => item?.state === LAUNCHPAD_STATUS.UPCOMING)
						.map((project, index) => (
							<Col key={index} xxl="4" lg="6">
								<SolPoolCard
									projectData={project}
									status={LAUNCHPAD_STATUS.UPCOMING}
								/>
							</Col>
						))}
				</Row>
			</div>
		</>
	);
};
export default SolLaunchpadUpcoming;
