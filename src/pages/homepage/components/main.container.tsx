import SolHomepageTemplate from '../../../components/templates/homepage';
import SolHomepageBannerContainer from './banner.container';
import SolHomepageNewsContainer from './news.container';

const SolHomepageMainContainer = () => {
	return (
		<SolHomepageTemplate>
			<>
				<SolHomepageBannerContainer />
				<SolHomepageNewsContainer />
			</>
		</SolHomepageTemplate>
	);
};
export default SolHomepageMainContainer;
