import { useState } from 'react';
import { useDispatch } from "react-redux";
import SolBridgeForm from 'src/components/organisms/bridge/bridge-form';
import SolBridgeSelectAssetDialog from 'src/components/organisms/bridge/select-asset-dialog';
import SolBridgeSelectNetworkDialog from 'src/components/organisms/bridge/select-network-dialog';
import SolBridgeProcessDialogContainer from './bridge-process.container';
import { toggleConnectWallet } from "src/redux/actions/applicationAction";
import { ASSETS, NETWORKS } from 'src/constants';

const SolBridgeFormContainer = () => {
    const dispatch = useDispatch();
    const [showBridgeProcessModal, setShowBridgeProcessModal] = useState(false);
    const [showSelectAssetModal, setShowSelectAssetModal] = useState(false);
    const [showSelectNetworkModal, setShowSelectNetworkModal] = useState(false);
    const [keywordSearchAsset, setKeywordSearchAsset] = useState('');
    const [selectedAsset, setSelectedAsset] = useState(undefined);
    const [selectedNetwork, setSelectedNetwork] = useState(undefined);

    // #region Connect wallet
    const handleConnectWallet = () => {
        dispatch(toggleConnectWallet(true))
    }
    // #endregion Connect wallet

    // #region Select asset
    const handleSelectAsset = () => {
        setShowSelectAssetModal(true);
    }
    const handleSearchAsset = (keyword) => {
        setKeywordSearchAsset(keyword);
        //todo
    }
    const handleSelectedAssetChange = (asset) => {
        setSelectedAsset(asset);
        setShowSelectNetworkModal(false);
    }
    const handleCloseSelectAsset = () => {
        setShowSelectAssetModal(false);
    }
    // #endregion Select asset

    // #region Select network
    const handleSelectNetwork = () => {
        setShowSelectNetworkModal(true);
    }
    const handleSelectedNetworkChange = (network) => {
        setSelectedNetwork(network)
        setShowSelectNetworkModal(false);
    }
    const handleCloseSelectNetwork = () => {
        setShowSelectNetworkModal(false);
    }
    // #endregion Select network

    // #region Bridge process
    const handleStartBridgeProcess = () => {
        setShowBridgeProcessModal(true);
    }
    const handleCloseBridgeProcess = () => {
        setShowBridgeProcessModal(false);
    }
    // #endregion Bridge process

    return <>
        <SolBridgeForm
            onSelectAsset={handleSelectAsset}
            onSelectNetwork={handleSelectNetwork}
            onSwap={handleStartBridgeProcess}
            onConnectWallet={handleConnectWallet}
        />

        {/* Select asset modal */}
        <SolBridgeSelectAssetDialog
            show={showSelectAssetModal}
            assets={ASSETS}
            selectedAsset={selectedAsset}
            keyword={keywordSearchAsset}
            onSearch={handleSearchAsset}
            onSelect={handleSelectedAssetChange}
            onClose={handleCloseSelectAsset}
        />

        {/* Select network modal */}
        <SolBridgeSelectNetworkDialog
            show={showSelectNetworkModal}
            networks={NETWORKS}
            selectedNetwork={selectedNetwork}
            onSelect={handleSelectedNetworkChange}
            onClose={handleCloseSelectNetwork}
        />

        {/* Bridge process modal */}
        <SolBridgeProcessDialogContainer
            show={showBridgeProcessModal}
            onClose={handleCloseBridgeProcess}
        />
    </>
}
export default SolBridgeFormContainer