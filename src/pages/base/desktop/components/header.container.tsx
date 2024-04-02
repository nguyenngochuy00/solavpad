import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import SolHeader from '../../../../components/organisms/common/header';
import SolYourWalletDialog from '../../../../components/organisms/common/your-wallet-dialog';
import {
	toggleConnectWallet,
	toggleSidebar,
	updateBreadcrumbs,
	updateWalletInfo
} from '../../../../redux/application/actions';
import { AppState } from '../../../../redux/rootReducer';
import { getBreadcrumbs } from '../../../../services/utils/route.utils';

const SolDesktopHeaderContainer = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const params = useParams();

	const breadcrumbs = useSelector(
		(state: AppState) => state.application.breadcrumbs
	);

	const sidebarExpaned = useSelector(
		(state: AppState) => state.application.sidebarExpaned
	);

	const walletInfo = useSelector(
		(state: AppState) => state.application.walletInfo
	);

	const [showYourWalletModal, setShowYourWalletModal] = useState(false);

	useEffect(() => {
		const breadcrumbs = getBreadcrumbs(location, params);
		dispatch(updateBreadcrumbs(breadcrumbs));
	}, [dispatch, location, params]);

	const handleShowConnectWallet = () => {
		dispatch(toggleConnectWallet(true));
	};

	const handleShowYourWallet = () => {
		setShowYourWalletModal(true);
	};

	const handleToggleSidebar = () => {
		dispatch(toggleSidebar(!sidebarExpaned));
	};

	const handleDisconnectWallet = () => {
		dispatch(updateWalletInfo(undefined));
	};

	return (
		<>
			{/* Header organisms */}
			<SolHeader
				walletInfo={walletInfo}
				breadcrumbs={breadcrumbs || []}
				onClickWallet={handleShowYourWallet}
				onClickConnectWallet={handleShowConnectWallet}
				onToggleSidebar={handleToggleSidebar}
				onDisconnectWallet={handleDisconnectWallet}
			/>

			{/* Your wallet info modal */}
			<SolYourWalletDialog
				show={showYourWalletModal}
				walletAddress={walletInfo?.address}
				walletUrl={walletInfo?.walletUrl}
				onClose={() => setShowYourWalletModal(false)}
			/>
		</>
	);
};
export default SolDesktopHeaderContainer;
