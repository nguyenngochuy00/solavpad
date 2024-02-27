import { Link } from 'react-router-dom';
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
			<SolPoolImage
				src={imgURL}
				networkIcon={networkIcon}
				networkName={networkName}
				styleImg="medium"
				styleNetwork="center"
				styleIcon="medium"
				styleName="medium"
			/>
			<div className="sol-launchpad-detail-summary-inner">
				<div className="sol-launchpad-detail-summary-tag">
					<span className={`sol-launchpad-detail-summary-${status}`}>
						{status}
					</span>
					<span>BUSD</span>
				</div>
				<div className="sol-launchpad-detail-summary-title">{title}</div>
				<div className="sol-launchpad-detail-summary-desc">{description}</div>
				<div className="sol-launchpad-detail-summary-social">
					<span>Available on:</span>
					<Link className="img">
						<img src={telegram} alt="" />
					</Link>
					<Link className="img">
						<img src={twitter} alt="" />
					</Link>
					<Link className="img">
						<img src={webURL} alt="" />
					</Link>
				</div>
			</div>
		</div>
	);
};
export default SolLaunchpadDetailSummary;
