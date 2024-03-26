import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../../constants';
import { formatNumberDownRound } from '../../../../services/helpers/helpers';
import { ProjectDetail } from '../../../../types';
import SolAvailableOn from '../../../molecules/available-on';
import SolInfo from '../../../molecules/info-block';
import SolPoolImage from '../../../molecules/pool-image';
import SolProgressBar from '../../../molecules/progress-bar';
import './index.scss';

interface SolLaunchpadOpeningProps {
	sectionTitle?: string;
	projectData?: ProjectDetail | any;
}

const SolLaunchpadOpening = ({
	sectionTitle = '',
	projectData
}: SolLaunchpadOpeningProps) => {
	return (
		<>
			{sectionTitle ? <h3>{sectionTitle}</h3> : <></>}
			<div className="sol-launchpad-opening">
				{projectData ? (
					<Row className="gx-xxl-5 gy-4">
						<Col xl="4">
							<Link
								to={projectData?.routeUrl || ''}
								className="sol-launchpad-opening-img"
							>
								<SolPoolImage
									src={projectData?.logo}
									networkIcon={'/images/images/Solana_logo_1.png'}
									networkName={'SOLANA'}
									type="type-2"
								/>
							</Link>
						</Col>
						<Col xl="8">
							<Link
								to={projectData?.routeUrl || ''}
								className="sol-launchpad-opening-title"
							>
								{projectData?.name}
							</Link>
							<div className="sol-launchpad-opening-description">
								{projectData?.description}
							</div>
							<div className="sol-launchpad-opening-stats">
								<SolInfo
									size="lg"
									label="Swap rate"
									value={`1 ◎ = ${formatNumberDownRound(
										Number(projectData?.rate) | 0,
										0
									)} ${projectData?.symbol}`}
								/>
								<SolInfo
									size="lg"
									label="Total Supply"
									value={formatNumberDownRound(
										Number(projectData?.totalSupply) | 0,
										0
									)}
								/>
								<SolInfo
									size="lg"
									label="Access"
									value={projectData?.isPrivate ? 'Private' : 'Public'}
								/>
							</div>
							<div className="sol-launchpad-opening-progress">
								<div className="sol-launchpad-opening-progress-label">
									Progress
								</div>
								{/* TO-DO: get percent coverage */}
								<SolProgressBar percent={50} size="lg" />
								<div className="sol-launchpad-opening-progress-info">
									<span>Allocation round</span>
									<span>
										<b>{projectData?.participants || 0}</b> participants
									</span>
								</div>
							</div>
							<div className="sol-launchpad-opening-action">
								<Link
									to={`/${APP_ROUTES.LAUNCHPAD_DETAIL.path.replace(
										':id',
										String(projectData?.id || '') 
									)}`}
									className="sol-btn sol-btn-lg sol-btn-primary"
								>
									Join Now
								</Link>
								<SolAvailableOn
									telegram={projectData?.telegram}
									twitter={projectData?.twitter}
									webURL={projectData?.website}
									size="lg"
								/>
							</div>
						</Col>
					</Row>
				) : (
					<div> No projects currently open</div>
				)}
			</div>
		</>
	);
};
export default SolLaunchpadOpening;
