import SolStatistic from 'src/components/molecules/statistic';
import './index.scss';

const SolLaunchpadBanner = () => {
	return (
		<div className="sol-launchpad-banner">
			<div className="banner-left">
				<span className="banner-title">
					Welcome to <br /> The Solav Launchpad
				</span>
				<span className="banner-des">
					Solav Launchpad is your ticket to diversify your DeFi investment
					portfolio & access the best crypto projects.
				</span>
				<div className="banner-statistic-group">
					<SolStatistic value="100" label="Completed Launchpads" />
					<div className="banner-statistic-space"></div>
					<SolStatistic value="1" label="Opening Launchpads" />
					<div className="banner-statistic-space"></div>
					<SolStatistic value="3" label="Upcoming Launchpads" />
					<div className="banner-statistic-space"></div>
					<SolStatistic value="900M+" label="Fund Raised ($)" />
				</div>
			</div>
			<img
				className="sol-launcgpad-right"
				src="images\images\banner.png"
				alt=""
			/>
		</div>
	);
};
export default SolLaunchpadBanner;
