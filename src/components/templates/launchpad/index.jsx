import SolLaunchpadBanner from 'src/components/organisms/launchpad/banner';
import SolLaunchpadCompleted from 'src/components/organisms/launchpad/completed-launchpads';
import SolLaunchpadOpening from 'src/components/organisms/launchpad/opening-launchpads';
import SolLaunchpadUpcoming from 'src/components/organisms/launchpad/upcoming-launchpads';
import './index.scss';

const SolLaunchpadTemplate = () => {
	return (
		<div className="sol-launchpad-template">
			<SolLaunchpadBanner />
			<SolLaunchpadOpening
				src="images\images\FOTA_2.png"
				styleImg="large"
				styleNetwork="center"
				styleIcon="medium"
				styleName="medium"
				networkIcon="images\images\Solana_logo_1.png"
				networkName="SOLANA"
				telegram="../images/icons/telegram.svg"
				twitter="../images/icons/twitter.svg"
				webURL="../images/icons/webURL.svg"
			/>
			<SolLaunchpadUpcoming />
			<SolLaunchpadCompleted />
		</div>
	);
};
export default SolLaunchpadTemplate;
