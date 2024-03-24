import SolButton from '../../../components/atoms/button';
import SolHomepageBanner from '../../../components/organisms/homepage/banner';

const SolHomepageBannerContainer = () => {
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
