import { get } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import SolConnectWalletDialog from "../../../../components/organisms/common/connect-wallet-dialog";
import { CONNECT_WALLET_EXTEMSIONS } from "../../../../constants";
import { toggleConnectWallet } from "../../../../redux/actions/applicationAction";

const SolConnectWalletContainer = () => {
    const dispatch = useDispatch();

    const showConnectWallet = useSelector((state) =>
        get(state, "system.showConnectWallet", false)
    );

    const handleSelectConnect = () => {
        dispatch(toggleConnectWallet(false));
    }

    const handleCloseConnectWallet = ()=>{
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