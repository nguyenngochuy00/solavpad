import SolDesktopTemplate from '../../../../components/templates/base/desktop';
import SolConnectWalletContainer from './connect-wallet.container';
import SolDesktopHeaderContainer from './header.container';
import SolDesktopSidebarContainer from './sidebar.container';

const SolDesktopMainContainer = () => {
	return (
		<>
			<SolDesktopTemplate
				sidebar={<SolDesktopSidebarContainer />}
				header={<SolDesktopHeaderContainer />}
			/>
			<SolConnectWalletContainer />
		</>
	);
};
export default SolDesktopMainContainer;
