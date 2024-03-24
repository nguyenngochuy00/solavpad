// import SolLaunchpadBanner from "src/components/organisms/launchpad/banner"

import SolLaunchpadBanner from '../../../components/organisms/launchpad/banner';
import { CommonItem } from '../../../types';

const defaultStatics: CommonItem[] = [
	{ label: 'Completed Launchpads', value: 100 },
	{ label: 'Opening Launchpads', value: 1 },
	{ label: 'Upcoming Launchpads', value: 2 },
	{ label: 'Fund Raised ($)', value: '900M+' }
] 


const SolLaunchpadBannerContainer = () => {
	return (
		<SolLaunchpadBanner
			title={
				<>
					Welcome to <br /> The Solav Launchpad
				</>
			}
			description="Solav Launchpad is your ticket to diversify your DeFi investment portfolio & access the best crypto projects."
			statistics={defaultStatics}
			image="/images/images/banner.png"
		/>
	);
};
export default SolLaunchpadBannerContainer;
