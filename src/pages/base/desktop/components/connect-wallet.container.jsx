import { get } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import SolConnectWalletDialog from "src/components/organisms/common/connect-wallet-dialog";
import { CONNECT_WALLET_EXTEMSIONS } from "src/constants";
import { toggleConnectWallet, updateWalletInfo } from "src/redux/actions/applicationAction";

const SolConnectWalletContainer = () => {
    const dispatch = useDispatch();

    const showConnectWallet = useSelector((state) =>
        get(state, "system.showConnectWallet", false)
    );

    const handleSelectConnect = () => {
        dispatch(updateWalletInfo({
            connected: true,
            address: '0xE0493DD5F947A93B8C0d750d317c46F393a0FBA2',
            walletUrl: 'https://google.com'
        }))
        dispatch(toggleConnectWallet(false));
    }

    const handleCloseConnectWallet = () => {
        dispatch(toggleConnectWallet(false));
    }

    return <>
        {/* Connect wallet modal */}
        <SolConnectWalletDialog
            show={showConnectWallet}
            extensions={CONNECT_WALLET_EXTEMSIONS}
            onSelect={handleSelectConnect}
            onClose={handleCloseConnectWallet}
        />
    </>
}
export default SolConnectWalletContainer