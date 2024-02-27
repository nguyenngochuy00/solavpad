import { Link } from 'react-router-dom';
import SolButton from 'src/components/atoms/button';
import SolInfo from 'src/components/molecules/info-block';
import SolPoolImage from 'src/components/molecules/pool-image';
import SolProgressBar from 'src/components/molecules/progress-bar';
import './index.scss';

const SolLaunchpadOpening = ({
	src = '',
	networkIcon,
	networkName = '',
	styleImg = '',
	styleNetwork = '',
	styleIcon = '',
	styleName = '',
	styleLabel = '',
	styleValue = '',
	telegram = '',
	twitter = '',
	webURL = '',
	caption = '',
	variant = '',
	size = ''
}) => {
	return (
		<div className="sol-launchpad-opening">
			<div className="sol-launchpad-opening-name">Opening Launchpads</div>
			<div className="sol-launchpad-opening-main">
				<Link to="/" className="sol-launchpad-opening-img">
					<SolPoolImage src={src} networkIcon={networkIcon} networkName={networkName} type='type-2' />
				</Link>
				<div className="sol-launchpad-opening-info">
					<Link to="/" className="info-title">
						Fight of the Ages (Blue Diamond Private)
					</Link>
					<span className="info-des">
						Fight of the Ages is fantasy Triple-A MOBA game project.
					</span>
					<div className="info-group">
						<div>
							<SolInfo
								label="Swap rate"
								value="1 BUSD = 6.666666 FOTA"
								styleLabel="md"
								styleValue="lg"
							/>
						</div>
						<div>
							<SolInfo
								label="Cap"
								value="13,000 USDB"
								styleLabel="md"
								styleValue="lg"
							/>
						</div>
						<div>
							<SolInfo
								label="Access"
								value="Private"
								styleLabel="md"
								styleValue="lg"
							/>
						</div>
					</div>
					<div className="info-progress">
						<span className="info-progress-name">Progress</span>
						<SolProgressBar percent={70} />
						<div className="info-progress-under">
							<span className="info-progress-allocation">Allocation round</span>
							<div className="info-progress-participants">
								<span className="participants-number">10</span>
								<span className="participants-number-text"> participants</span>
							</div>
						</div>
					</div>
					<div className="info-button">
						<SolButton caption="Join Now" variant="primary" size="lg" />
						<div className="info-button-web">
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
			</div>
		</div>
	);
};
export default SolLaunchpadOpening;
