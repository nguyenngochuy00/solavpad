import { useEffect } from 'react';
import SolButton from 'src/components/atoms/button';
import SolHomepageBanner from 'src/components/organisms/homepage/banner';
import { getIDOProjectDetail } from 'src/utils/crowd-funding.utils';

const SolHomepageBannerContainer = () => {
	useEffect(() => {
		console.log('1111111111');
		demoProjectDetail();
	}, []);

	const demoProjectDetail = async () => {
		const data = await getIDOProjectDetail();
		console.log('data', data);
	};

	return (
		<SolHomepageBanner
			title="Get early access to the ideas of tomorrow"
			description="Highly-vetted Web3 projects you can trust. Supported by industry-leading creators and funds."
			image="/images/banner.png"
			actions={
				<>
					<SolButton caption="Upcoming sales" variant="primary" size="lg" />
					<SolButton caption="Join communication" size="lg" />
				</>
			}
		/>
	);
};
export default SolHomepageBannerContainer;
