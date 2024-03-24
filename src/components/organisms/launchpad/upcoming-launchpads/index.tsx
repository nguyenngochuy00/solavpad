import { Key } from 'react';
import { Col, Row } from 'react-bootstrap';
import { LAUNCHPAD_STATUS } from '../../../../constants';
import { ProjectDetail } from '../../../../types';
import SolPoolCard from '../../common/pool-card';
import './index.scss';

interface SolLaunchpadUpcomingProps {
	sectionTitle?: string;
	projects: ProjectDetail[];
}

const SolLaunchpadUpcoming = ({
	sectionTitle = '',
	projects
}: SolLaunchpadUpcomingProps) => {
	return (
		<>
			{sectionTitle ? <h3>{sectionTitle}</h3> : <></>}
			<div className="sol-launchpad-upcoming">
				{projects?.length || 0 > 0 ? (
					<Row>
						{projects
							.filter(
								(item: ProjectDetail) =>
									item?.state === LAUNCHPAD_STATUS.UPCOMING
							)
							.map((project: ProjectDetail, index: Key | null | undefined) => (
								<Col key={index} xxl="4" lg="6">
									<SolPoolCard
										projectData={project}
										status={LAUNCHPAD_STATUS.UPCOMING}
									/>
								</Col>
							))}
					</Row>
				) : (
					<div> No projects coming</div>
				)}
			</div>
		</>
	);
};
export default SolLaunchpadUpcoming;
