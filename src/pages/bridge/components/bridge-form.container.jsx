import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import SolBridgeForm from 'src/components/organisms/bridge/bridge-form';
import SolBridgeSelectAssetDialog from 'src/components/organisms/bridge/select-asset-dialog';
import SolBridgeSelectNetworkDialog from 'src/components/organisms/bridge/select-network-dialog';
import { ASSETS, NETWORKS } from 'src/constants';
import { toggleConnectWallet } from "src/redux/actions/applicationAction";
import SolBridgeProcessDialogContainer from './bridge-process.container';

const SolBridgeFormContainer = () => {
    const dispatch = useDispatch();
    const connectedWallet = true;
    const [asset, setAsset] = useState(undefined);
    const [networkFrom, setNetworkFrom] = useState(undefined);
    const [networkTo, setNetworkTo] = useState(undefined);
    const [yourBalance, setYourBalance] = useState(0);
    const [amount, setAmount] = useState(0);
    const [showBridgeProcessModal, setShowBridgeProcessModal] = useState(false);
    const [showSelectAssetModal, setShowSelectAssetModal] = useState(false);
    const [showSelectNetworkModal, setShowSelectNetworkModal] = useState(false);
    const [keywordSearchAsset, setKeywordSearchAsset] = useState('');
    const [selectedNetwork, setSelectedNetwork] = useState(undefined);
    const [destination, setDestination] = useState('');
    const [destinationIcon, setDestinationIcon] = useState('');
    

    useEffect(() => {
        setYourBalance(0);
        setDestination('0xcb2e9d6ddB9aaF9dCF05B162FB29D95ABD164012');
        setDestinationIcon('/images/icons/blastfi.svg');
    }, [])

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
    const handleSelectedAssetChange = (newAsset) => {
        setAsset(newAsset);
        setShowSelectAssetModal(false);
    }
    const handleCloseSelectAsset = () => {
        setShowSelectAssetModal(false);
    }
    // #endregion Select asset

    // #region Select network
    const handleSelectNetwork = (type) => {
        setSelectedNetwork({
            type,
            value: type === 'from' ? networkFrom : networkTo
        });
        setShowSelectNetworkModal(true);
    }
    const handleSelectedNetworkChange = (network) => {
        if (selectedNetwork.type === 'from') {
            setNetworkFrom(network);
        } else {
            setNetworkTo(network);
        }
        handleCloseSelectNetwork();
    }
    const handleCloseSelectNetwork = () => {
        setShowSelectNetworkModal(false);
        setSelectedNetwork(undefined);
    }
    // #endregion Select network

    const handleAmountChange = (newAmount) => {
        setAmount(newAmount);
    }

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
            connectedWallet={connectedWallet}
            asset={asset}
            networkFrom={networkFrom}
            networkTo={networkTo}
            yourBalance={yourBalance}
            amount={amount}
            destination={destination}
            destinationIcon={destinationIcon}
            onAmountChange={handleAmountChange}
            onSelectAsset={handleSelectAsset}
            onSelectNetwork={handleSelectNetwork}
            onSwap={handleStartBridgeProcess}
            onConnectWallet={handleConnectWallet}
        />

        {/* Select asset modal */}
        <SolBridgeSelectAssetDialog
            show={showSelectAssetModal}
            assets={ASSETS}
            selectedAsset={asset}
            keyword={keywordSearchAsset}
            onSearch={handleSearchAsset}
            onSelect={handleSelectedAssetChange}
            onClose={handleCloseSelectAsset}
        />

        {/* Select network modal */}
        <SolBridgeSelectNetworkDialog
            show={showSelectNetworkModal}
            networks={NETWORKS}
            selectedNetwork={selectedNetwork?.value}
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