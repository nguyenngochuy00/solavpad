import { useState } from "react";
import { useDispatch } from "react-redux";
import SolHeader from "../../../../components/organisms/common/header";
import SolYourWalletDialog from "../../../../components/organisms/common/your-wallet-dialog";
import { toggleConnectWallet } from "../../../../redux/actions/applicationAction";

const SolDesktopHeaderContainer = () => {
    const dispatch = useDispatch();
    const [showYourWalletModal, setShowYourWalletModal] = useState(false);

    const handleShowConnectWallet = () => {
        dispatch(toggleConnectWallet(true));
    }

    const handleShowYourWallet = () => {
        setShowYourWalletModal(true);
    }

    return <>
        {/* Header organisms */}
        <SolHeader
            onClickWallet={handleShowYourWallet}
            onClickConnectWallet={handleShowConnectWallet}
        />

        {/* Your wallet info modal */}
        <SolYourWalletDialog
            show={showYourWalletModal}
            walletAddress="0xE0493DD5F947A93B8C0d750d317c46F393a0FBA2"
            walletUrl="http://abc.com"
            onClose={() => setShowYourWalletModal(false)}
        />
    </>
}
export default SolDesktopHeaderContainer