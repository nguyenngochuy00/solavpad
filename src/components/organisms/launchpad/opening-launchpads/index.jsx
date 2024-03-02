import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SolAvailableOn from 'src/components/molecules/available-on';
import SolInfo from 'src/components/molecules/info-block';
import SolPoolImage from 'src/components/molecules/pool-image';
import SolProgressBar from 'src/components/molecules/progress-bar';
import './index.scss';
import { formatNumberDownRound } from 'src/utils/helpers';
import { APP_ROUTES } from 'src/constants';

const SolLaunchpadOpening = ({ sectionTitle = '', projectData }) => {
	return (
		<>
			{sectionTitle ? <h3>{sectionTitle}</h3> : <></>}
			<div className="sol-launchpad-opening">
				<Row className="gx-xxl-5 gy-4">
					<Col xl="4">
						<Link
							to={projectData.routeUrl}
							className="sol-launchpad-opening-img"
						>
							<SolPoolImage
								src={'/images/images/FOTA_2.png'}
								networkIcon={'/images/images/Solana_logo_1.png'}
								networkName={'SOLANA'}
								type="type-2"
							/>
						</Link>
					</Col>
					<Col xl="8">
						<Link
							to={projectData.routeUrl}
							className="sol-launchpad-opening-title"
						>
							{projectData.name}
						</Link>
						<div className="sol-launchpad-opening-description">
							{projectData.description}
						</div>
						<div className="sol-launchpad-opening-stats">
							<SolInfo
								size="lg"
								label="Swap rate"
								value={`1 ◎ = ${formatNumberDownRound(projectData?.rate, 0)} ${
									projectData?.symbol
								}`}
							/>
							<SolInfo
								size="lg"
								label="Total Supply"
								value={formatNumberDownRound(projectData?.totalSupply, 0)}
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
									<b>{projectData.participants}</b> participants
								</span>
							</div>
						</div>
						<div className="sol-launchpad-opening-action">
							<Link
								to={`/${APP_ROUTES.LAUNCHPAD_DETAIL.path.replace(
									':id',
									projectData?.id
								)}`}
								className="sol-btn sol-btn-lg sol-btn-primary"
							>
								Join Now
							</Link>
							<SolAvailableOn
								telegram={projectData.telegram}
								twitter={projectData.twitter}
								webURL={projectData.website}
								size="lg"
							/>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
};
export default SolLaunchpadOpening;
