import SolHomepageNews from '../../../components/organisms/homepage/news';
import { SITE_CONFIGS } from '../../../constants';

const SolHomepageNewsContainer = () => {
	const NEWS = [
		{
			id: 1,
			url: '#',
			image: '/images/news-lg.png',
			title: 'How to Participate in a Solav IDO?',
			description:
				'A good place to start is: what is Solav? (We’ll give you the brief version). Solav is a platform that connects young projects with early community members through initial…'
		},
		{
			id: 2,
			url: '#',
			image: '/images/news-md-1.png',
			title: 'How to buy the Solav $SOLV token?',
			description: ''
		},
		{
			id: 3,
			url: '#',
			image: '/images/news-md-2.png',
			title: 'What is an IDO (Initial Decentralized Offering)?',
			description: ''
		}
	];
	return (
		<SolHomepageNews
			news={NEWS}
			sectionTitle={`Learn about ${SITE_CONFIGS.siteTitle}`}
		/>
	);
};
export default SolHomepageNewsContainer;
