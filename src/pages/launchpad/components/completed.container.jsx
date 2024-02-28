import SolLaunchpadCompleted from 'src/components/organisms/launchpad/completed-launchpads';
import { APP_ROUTES, LAUNCHPAD_STATUS } from 'src/constants';

const SolLaunchpadCompletedContainer = () => {
	const PROJECTS = [
		{
			routeUrl: `/${APP_ROUTES.LAUNCHPAD_DETAIL.path.replace(':id', 1)}`,
			logo: '/images/images/FOTA_2.png',
			name: 'Fight of the Ages (Blue Diamond Private)',
			description: 'Fight of the Ages is fantasy Triple-A MOBA game project.',
			networkIcon: '/images/images/Solana_logo_1.png',
			networkName: 'SOLANA',
			swapRate: '1 BUSD = 6.666666 FOTA',
			cap: '13,000 USDB',
			accessType: 'Private',
			progressPercent: 100,
			progressCurent: 100000,
			progressValue: 100000,
			participants: 1234,
			telegram: '/images/icons/telegram.svg',
			twitter: '/images/icons/twitter.svg',
			webURL: '/images/icons/webURL.svg',
			status: LAUNCHPAD_STATUS.COMPLETED
		},
		{
			routeUrl: `/${APP_ROUTES.LAUNCHPAD_DETAIL.path.replace(':id', 1)}`,
			logo: '/images/images/FOTA_2.png',
			name: 'Fight of the Ages (Blue Diamond Private)',
			description: 'Fight of the Ages is fantasy Triple-A MOBA game project.',
			networkIcon: '/images/images/Solana_logo_1.png',
			networkName: 'SOLANA',
			swapRate: '1 BUSD = 6.666666 FOTA',
			cap: '13,000 USDB',
			accessType: 'Private',
			progressPercent: 100.10,
			progressCurent: 100095.8583,
			progressValue: 100000,
			participants: 323,
			telegram: '/images/icons/telegram.svg',
			twitter: '/images/icons/twitter.svg',
			webURL: '/images/icons/webURL.svg',
			status: LAUNCHPAD_STATUS.COMPLETED
		},
		{
			routeUrl: `/${APP_ROUTES.LAUNCHPAD_DETAIL.path.replace(':id', 1)}`,
			logo: '/images/images/FOTA_2.png',
			name: 'Fight of the Ages (Blue Diamond Private)',
			description: 'Fight of the Ages is fantasy Triple-A MOBA game project.',
			networkIcon: '/images/images/Solana_logo_1.png',
			networkName: 'SOLANA',
			swapRate: '1 BUSD = 6.666666 FOTA',
			cap: '13,000 USDB',
			accessType: 'Private',
			progressPercent: 100,
			progressCurent: 100000,
			progressValue: 100000,
			participants: 1212,
			telegram: '/images/icons/telegram.svg',
			twitter: '/images/icons/twitter.svg',
			webURL: '/images/icons/webURL.svg',
			status: LAUNCHPAD_STATUS.COMPLETED
		}
	];
	return <SolLaunchpadCompleted sectionTitle="Completed Launchpads" projects={PROJECTS} />;
};
export default SolLaunchpadCompletedContainer;
