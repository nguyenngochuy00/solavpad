import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SolLaunchpadDetailJoinPoolDialog from '../../../components/organisms/launchpad-detail/join-pool-dialog';
import SolLaunchpadDetailPoolCard from '../../../components/organisms/launchpad-detail/pool-card';
import { toggleConnectWallet } from '../../../redux/application/actions';
import { AppState } from '../../../redux/rootReducer';
import { idoService } from '../../../services/blockchain';
import { formatNumberDownRound } from '../../../services/helpers/helpers';
import { JoinIdoParams } from '../../../types/ido.type';
import { getLaunchpadDetail, getWalletInfor } from '../redux/actions';

const SolLaunchpadDetailPoolCardContainer: React.FC = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const [showJoinModal, setShowJoinModal] = useState<boolean>(false);

	const walletInfo = useSelector(
		(state: AppState) => state.launchpadDetail.walletInfor
	);

	const projectSelected = useSelector(
		(state: AppState) => state.launchpadDetail.launchpad
	);

	const [enableJoinBtn, setEnableJoinBtn] = useState<boolean>(false);
	const connection = useConnection();
	const { publicKey, connected } = useWallet();
	const anchorWallet = useAnchorWallet();


	const handleJoinPool = async (amount: number) => {
		if (!publicKey || !anchorWallet || !projectSelected?.contract || !connection) {
			//show message
			return;
		}

		const result = await idoService.joinIdo(connection, anchorWallet, {
			amount: amount, //doing sua lai amount cho dung
			contractAddress: projectSelected.contract?.toString(),
			raiseTokenMint: projectSelected.raiseToken.toString(),
			wallet: publicKey
		} as JoinIdoParams);

		setShowJoinModal(false);
		if (result.status && params.id) {
			dispatch(getLaunchpadDetail(params.id));
			//show message that thanh cong
		} else {
			//show message that bai
		}
	};

	useEffect(() => {
		if (!projectSelected?.contract || !walletInfo) return;

		setEnableJoinBtn(true);

		if (
			projectSelected?.state === 'P' ||
			projectSelected?.state === 'C' ||
			projectSelected.contract === 'TBA'
		) {
			setEnableJoinBtn(false);
			return;
		}

		if (
			!walletInfo?.remainingAllocation ||
			walletInfo?.remainingAllocation === '0'
		) {
			setEnableJoinBtn(false);
			return;
		}
		if (!(walletInfo.roundState === 1 || walletInfo.roundState === 3)) {
			setEnableJoinBtn(false);
			return;
		}
	}, [projectSelected, walletInfo]);

	useEffect(() => {
		debugger
		if (connected) {
			dispatch(
				getWalletInfor({
					projectContract: projectSelected?.contract,
					publicKey: publicKey
				})
			);
		}
	}, [projectSelected, connected]);

	const handleShowConnectWallet: VoidFunction = () => {
		dispatch(toggleConnectWallet(true));
	};

	return (
		<>
			<SolLaunchpadDetailPoolCard
				enableJoin={enableJoinBtn}
				opening
				onJoinPool={() => setShowJoinModal(true)}
				// onApprove={() => setShowApproveModal(true)}
				onConnectWallet={() => handleShowConnectWallet()}
			/>
			<SolLaunchpadDetailJoinPoolDialog
				show={showJoinModal}
				projectName={projectSelected?.name || ''}
				amountSymbol={projectSelected?.symbol}
				balance={formatNumberDownRound(
					Number(walletInfo?.tokenBalance) >=
						Number(walletInfo?.remainingAllocation)
						? Number(walletInfo?.remainingAllocation)
						: Number(walletInfo?.tokenBalance),
					projectSelected?.decimals
				)}
				onClose={() => setShowJoinModal(false)}
				onJoin={handleJoinPool}
			/>
		</>
	);
};
export default SolLaunchpadDetailPoolCardContainer;
