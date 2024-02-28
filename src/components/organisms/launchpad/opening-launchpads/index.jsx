import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SolButton from 'src/components/atoms/button';
import SolAvailableOn from 'src/components/molecules/available-on';
import SolInfo from 'src/components/molecules/info-block';
import SolPoolImage from 'src/components/molecules/pool-image';
import SolProgressBar from 'src/components/molecules/progress-bar';
import './index.scss';

const SolLaunchpadOpening = ({
	sectionTitle = '',
	projectData,
}) => {
	return (
		<>
			{sectionTitle ? <h3>{sectionTitle}</h3> : <></>}
			<div className="sol-launchpad-opening">
				<Row className='gx-xl-5 gy-4'>
					<Col xxl="4" xl="5">
						<Link to={projectData.routeUrl} className="sol-launchpad-opening-img">
							<SolPoolImage src={projectData.logo} networkIcon={projectData.networkIcon} networkName={projectData.networkName} type='type-2' />
						</Link>
					</Col>
					<Col xxl="8" xl="7">
						<Link to={projectData.routeUrl} className="sol-launchpad-opening-title">{projectData.name}</Link>
						<div className='sol-launchpad-opening-description'>{projectData.description}</div>
						<div className='sol-launchpad-opening-stats'>
							<SolInfo size='lg' label="Swap rate" value={projectData.swapRate} />
							<SolInfo size='lg' label="Cap" value={projectData.cap} />
							<SolInfo size='lg' label="Access" value={projectData.accessType} />
						</div>
						<div className='sol-launchpad-opening-progress'>
							<div className='sol-launchpad-opening-progress-label'>Progress</div>
							<SolProgressBar percent={projectData.progressPercent} size='lg' />
							<div className='sol-launchpad-opening-progress-info'>
								<span>Allocation round</span>
								<span><b>{projectData.participants}</b> participants</span>
							</div>
						</div>
						<div className='sol-launchpad-opening-action'>
							<SolButton caption="Join Now" variant="primary" size="lg" />
							<SolAvailableOn
								telegram={projectData.telegram}
								twitter={projectData.twitter}
								webURL={projectData.webURL}
								size='lg'
							/>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
};
export default SolLaunchpadOpening;
