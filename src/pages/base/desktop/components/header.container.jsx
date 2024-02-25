import { get } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import SolHeader from "../../../../components/organisms/common/header";
import SolYourWalletDialog from "../../../../components/organisms/common/your-wallet-dialog";
import { toggleConnectWallet, updateBreadcrumbs } from "../../../../redux/actions/applicationAction";
import { getBreadcrumbs } from "../../../../utils/route.utils";

const SolDesktopHeaderContainer = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const params = useParams();

    const breadcrumbs = useSelector((state) =>
        get(state, "system.breadcrumbs", false)
    );
    const [showYourWalletModal, setShowYourWalletModal] = useState(false);

    useEffect(() => {
        const breadcrumbs = getBreadcrumbs(location, params);
        dispatch(updateBreadcrumbs(breadcrumbs));
    }, [dispatch, location, params])

    const handleShowConnectWallet = () => {
        dispatch(toggleConnectWallet(true));
    }

    const handleShowYourWallet = () => {
        setShowYourWalletModal(true);
    }

    return <>
        {/* Header organisms */}
        <SolHeader
            breadcrumbs={breadcrumbs}
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