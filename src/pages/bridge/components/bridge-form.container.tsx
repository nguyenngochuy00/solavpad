import { SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SolBridgeForm from '../../../components/organisms/bridge/bridge-form';
import SolBridgeSelectAssetDialog from '../../../components/organisms/bridge/select-asset-dialog';
import SolBridgeSelectNetworkDialog from '../../../components/organisms/bridge/select-network-dialog';
import { ASSETS, NETWORKS } from '../../../constants';
import { toggleConnectWallet } from '../../../redux/application/actions';
import { AppState } from '../../../redux/rootReducer';
import { NetworkType } from '../../../types';
import SolBridgeProcessDialogContainer from './bridge-process.container';

type SelectedNetworkType = {
	type: string;
	value?: NetworkType;
};

const SolBridgeFormContainer = () => {
	const dispatch = useDispatch();
	const walletInfo = useSelector(
		(state: AppState) => state.application.walletInfo
	);
	const [asset, setAsset] = useState<NetworkType | undefined>(undefined);
	const [networkFrom, setNetworkFrom] = useState<NetworkType | undefined>(
		undefined
	);
	const [networkTo, setNetworkTo] = useState<NetworkType | undefined>(
		undefined
	);
	const [yourBalance, setYourBalance] = useState<number>(0);
	const [amount, setAmount] = useState<number>(0);
	const [showBridgeProcessModal, setShowBridgeProcessModal] =
		useState<boolean>(false);
	const [showSelectAssetModal, setShowSelectAssetModal] =
		useState<boolean>(false);
	const [showSelectNetworkModal, setShowSelectNetworkModal] =
		useState<boolean>(false);
	const [keywordSearchAsset, setKeywordSearchAsset] = useState<string>('');
	const [selectedNetwork, setSelectedNetwork] = useState<
		SelectedNetworkType | undefined
	>(undefined);
	const [destination, setDestination] = useState<string>('');
	const [destinationIcon, setDestinationIcon] = useState<string>('');

	useEffect(() => {
		setYourBalance(0);
		setDestination('0xcb2e9d6ddB9aaF9dCF05B162FB29D95ABD164012');
		setDestinationIcon('/images/icons/blastfi.svg');
	}, []);

	// #region Connect wallet
	const handleConnectWallet = () => {
		dispatch(toggleConnectWallet(true));
	};
	// #endregion Connect wallet

	// #region Select asset
	const handleSelectAsset = () => {
		setShowSelectAssetModal(true);
	};
	const handleSearchAsset = (keyword: SetStateAction<string>) => {
		setKeywordSearchAsset(keyword);
		//todo
	};
	const handleSelectedAssetChange = (newAsset: NetworkType) => {
		setAsset(newAsset);
		setShowSelectAssetModal(false);
	};
	const handleCloseSelectAsset = () => {
		setShowSelectAssetModal(false);
	};
	// #endregion Select asset

	// #region Select network
	const handleSelectNetwork = (type: string) => {
		setSelectedNetwork({
			type,
			value: type === 'from' ? networkFrom : networkTo
		});
		setShowSelectNetworkModal(true);
	};
	const handleSelectedNetworkChange = (network: NetworkType) => {
		if (selectedNetwork?.type === 'from') {
			setNetworkFrom(network);
		} else {
			setNetworkTo(network);
		}
		handleCloseSelectNetwork();
	};
	const handleCloseSelectNetwork = () => {
		setShowSelectNetworkModal(false);
		setSelectedNetwork(undefined);
	};
	// #endregion Select network

	const handleAmountChange = (newAmount: number) => {
		setAmount(newAmount);
	};

	// #region Bridge process
	const handleStartBridgeProcess = () => {
		setShowBridgeProcessModal(true);
	};
	const handleCloseBridgeProcess = () => {
		setShowBridgeProcessModal(false);
	};
	// #endregion Bridge process

	return (
		<>
			<SolBridgeForm
				walletInfo={walletInfo}
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
	);
};
export default SolBridgeFormContainer;
