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
			<SolPoolImage src={imgURL} networkIcon={networkIcon} networkName={networkName} type='style-2' />
			<div className="sol-launchpad-detail-summary-inner">
				<div className="sol-launchpad-detail-summary-tag">
					<span className={`sol-launchpad-detail-summary-${status}`}>
						{status}
					</span>
					<span>BUSD</span>
				</div>
				<SolPageTitle>{title}</SolPageTitle>
				<div className="sol-launchpad-detail-summary-desc">{description}</div>
				<SolAvailableOn
					telegram={telegram}
					twitter={twitter}
					webURL={webURL}
					size='lg'
				/>
			</div>
		</div>
	);
};
export default SolLaunchpadDetailSummary;
