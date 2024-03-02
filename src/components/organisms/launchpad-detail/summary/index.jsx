import { Col, Row } from 'react-bootstrap';
import SolAvailableOn from 'src/components/molecules/available-on';
import SolPageTitle from 'src/components/molecules/page-title';
import SolPoolImage from 'src/components/molecules/pool-image';
import './index.scss';

const SolLaunchpadDetailSummary = ({
	imgURL,
	networkIcon,
	networkName,
	status = 'opening',
	title = '',
	description = '',
	telegram,
	twitter,
	webURL
}) => {
	return (
		<div className="sol-launchpad-detail-summary">
			<Row className="gx-xl-5 gy-4">
				<Col xl="4" lg="6" className="pe-xl-0 pe-lg-4">
					<SolPoolImage
						src={imgURL}
						networkIcon={networkIcon}
						networkName={networkName}
						type="style-2"
					/>
				</Col>
				<Col xl="8" lg="6">
					<div className="sol-launchpad-detail-summary-inner">
						<div className="sol-launchpad-detail-summary-tag">
							<span className={`sol-launchpad-detail-summary-${status}`}>
								{status}
							</span>
							<span>SOL</span>
						</div>
						<SolPageTitle>{title}</SolPageTitle>
						<div className="sol-launchpad-detail-summary-desc">
							{description}
						</div>
						<SolAvailableOn
							telegram={telegram}
							twitter={twitter}
							webURL={webURL}
							size="lg"
						/>
					</div>
				</Col>
			</Row>
		</div>
	);
};
export default SolLaunchpadDetailSummary;
