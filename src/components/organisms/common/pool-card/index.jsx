import { Col, Row } from 'react-bootstrap';
import './index.scss';
import { Link } from 'react-router-dom';
import SolPoolImage from 'src/components/molecules/pool-image';
import SolAvailableOn from 'src/components/molecules/available-on';
import SolInfo from 'src/components/molecules/info-block';
import SolProgressBar from 'src/components/molecules/progress-bar';
import SolButton from 'src/components/atoms/button';

const SolPoolCard = ({
	projectData,
	showCountDown = '',
	showProgress = '',
	showViewDetails = ''
}) => {
	return (
		<Col className="sol-pool-card ">
			<Row lg="8">
				{
					(showViewDetails = { showViewDetails } ? (
						<Link to={projectData.routeUrl} className="sol-pool-card-img">
							<SolPoolImage
								src={projectData.logo}
								networkIcon={projectData.networkIcon}
								networkName={projectData.networkName}
								type="type-1"
							/>
						</Link>
					) : null)
				}
			</Row>
			<Row>
				{
					(showViewDetails = { showViewDetails } ? (
						<Link to={projectData.routeUrl} className="sol-pool-card-title">
							{projectData.name}
						</Link>
					) : null)
				}

				<div className="sol-pool-card-description">
					{projectData.description}
				</div>
				<div className="sol-pool-card-availabe">
					<SolAvailableOn
						telegram={projectData.telegram}
						twitter={projectData.twitter}
						webURL={projectData.webURL}
						size="md"
					/>
				</div>
				<div className="sol-pool-card-stats">
					<SolInfo
						size="value"
						label="Swap rate"
						value={projectData.swapRate}
					/>
					<SolInfo size="value" label="Cap" value={projectData.cap} />
				</div>
				{
					(showProgress = { showProgress } ? (
						<div className="sol-pool-card-progress">
							<div className="sol-pool-card-progress-label">
								<span className="progress-label">Progress</span>
								<span className="progress-label">
									<b>{projectData.participants}</b> participants
								</span>
							</div>
							<SolProgressBar percent={projectData.progressPercent} size="lg" />
							<div className="sol-pool-card-progress-info">
								<span>
									<b>{projectData.participants}</b>{' '}
								</span>
								<span className="progress-info-parti">
									<b>{projectData.participants}</b>/
									<b>{projectData.participants}</b>
								</span>
							</div>
						</div>
					) : null)
				}
				{
					(showCountDown = { showCountDown } ? (
						<div className="sol-pool-card-action">
							<SolButton
								caption="Open in 14d 6h 16m 40s"
								variant="primary"
								size="lg"
								disabled="true"
							/>
						</div>
					) : (
						<div className="sol-pool-card-action">
							<SolButton caption="View details" variant="primary" size="lg" />
						</div>
					))
				}
			</Row>
		</Col>
	);
};
export default SolPoolCard;
