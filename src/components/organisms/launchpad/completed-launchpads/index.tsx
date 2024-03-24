import { Col, Row } from 'react-bootstrap';
import { LAUNCHPAD_STATUS } from '../../../../constants';
import { ProjectDetail } from '../../../../types';
import SolPoolCard from '../../common/pool-card';
import './index.scss';


type SolLaunchpadCompletedProps = { sectionTitle?: string; projects: ProjectDetail[] };

const SolLaunchpadCompleted = ({ sectionTitle = '', projects }: SolLaunchpadCompletedProps) => {
	return (
		<>
			{sectionTitle ? <h3>{sectionTitle}</h3> : <></>}
			<div className="sol-launchpad-completed">
				{projects?.length > 0 ? (
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
				) : (
					<div>No project closed</div>
				)}
			</div>
		</>
	);
};
export default SolLaunchpadCompleted;
