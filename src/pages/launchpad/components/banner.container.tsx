// import SolLaunchpadBanner from "src/components/organisms/launchpad/banner"

import { useSelector } from 'react-redux';
import SolLaunchpadBanner from '../../../components/organisms/launchpad/banner';
import { CommonItem } from '../../../types';
import { AppState } from '../../../redux/rootReducer';

const defaultStatics: CommonItem[] = [
	{ label: 'Completed Launchpads', value: 0 },
	{ label: 'Opening Launchpads', value: 0 },
	{ label: 'Upcoming Launchpads', value: 0 },
	{ label: 'Fund Raised ($)', value: '0M' }
] 


const SolLaunchpadBannerContainer = () => {
	const idoInfo = useSelector((state: AppState) => state.application.totalIdoProgram);
	
	if (idoInfo) {
		defaultStatics[0].value = idoInfo.completed;
		defaultStatics[1].value = idoInfo.opening;
		defaultStatics[2].value = idoInfo.upcoming;
		defaultStatics[3].value = idoInfo.fundRaised;
	}
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
