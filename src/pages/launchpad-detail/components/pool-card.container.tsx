import { get } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SolLaunchpadDetailApproveDialog from '../../../components/organisms/launchpad-detail/approve-dialog';
import SolLaunchpadDetailJoinPoolDialog from '../../../components/organisms/launchpad-detail/join-pool-dialog';
import SolLaunchpadDetailPoolCard from '../../../components/organisms/launchpad-detail/pool-card';
import { useSolBalance } from '../../../hooks/useState';
import { toggleConnectWallet } from '../../../redux/actions/applicationAction';
import { formatNumberDownRound } from '../../../services/helpers/helpers';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { JoinIdoParams, WalletInfo } from '../../../types/ido.type';
import { ProjectDetail } from '../../../types';
import { idoService, solaUtils } from '../../../services/blockchain';
import { Anchor } from 'react-bootstrap';

interface SolLaunchpadDetailPoolCardContainerProps {
	projectSelected: ProjectDetail | undefined;
}

const SolLaunchpadDetailPoolCardContainer: React.FC<
	SolLaunchpadDetailPoolCardContainerProps
> = ({ projectSelected }: SolLaunchpadDetailPoolCardContainerProps) => {
	const dispatch = useDispatch();
	const [showJoinModal, setShowJoinModal] = useState<boolean>(false);
	const [showApproveModal, setShowApproveModal] = useState<boolean>(false);
	const [walletInfo, setWalletInfo] = useState<WalletInfo>();

	const solBal = useSolBalance();

	const connection = useConnection();
	const { publicKey, connected } = useWallet();
	const handleJoinPool: VoidFunction = async () => {
		if (!publicKey || !connection || !projectSelected?.contract) return;
		const transaction = await idoService.joinIdo(connection, {
			amount: 1,
			contractAddress: projectSelected.contract?.toString(),
			raiseTokenMint: projectSelected.raiseToken.toString(),
			wallet: publicKey.toString()
		} as JoinIdoParams);
		if (transaction) {
			setShowJoinModal(false);
		}
	};
	useEffect(() => {
		const fetchData = async () => {
			if (!projectSelected?.contract || !publicKey) return;
			const result = await solaUtils.getWalletInfo(
				projectSelected?.contract,
				publicKey
			);

			if (!result) return;
			console.log('result', result);
			setWalletInfo(result);
		};
		fetchData();
	}, [projectSelected, connected]);

	const handleApprove: VoidFunction = () => {
		setShowApproveModal(false);
	};

	const handleShowConnectWallet: VoidFunction = () => {
		dispatch(toggleConnectWallet(true));
	};

	return (
		<>
			<SolLaunchpadDetailPoolCard
				opening
				walletInfo={walletInfo}
				countDownTime={projectSelected?.openTimestamp}
				yourTokenBalance={`${formatNumberDownRound(
					Number(walletInfo?.tokenBalance),
					9
				)} ${projectSelected?.symbol}`}
				yourNativeCoinBalance={`${formatNumberDownRound(solBal, 9)} SOL`}
				yourTier={walletInfo?.tierName}
				swappedValue={`${formatNumberDownRound(
					Number(walletInfo?.userParticipation),
					projectSelected?.decimals
				)} ${projectSelected?.symbol}`}
				swappedValueConvert={`${formatNumberDownRound(
					Number(projectSelected?.rate) * Number(walletInfo?.userParticipation)
				)} ${projectSelected?.projectTokenSymbol}`}
				remainingAllocation={`${formatNumberDownRound(
					Number(walletInfo?.remainingAllocation)
				)} ${projectSelected?.symbol}`}
				progressPercent={
					(Number(projectSelected?.participated.toString()) /
						Number(projectSelected?.cap.toString())) *
						100 || 0
				}
				participants={projectSelected?.participatedCount || 0}
				onJoinPool={() => setShowJoinModal(true)}
				onApprove={() => setShowApproveModal(true)}
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
			<SolLaunchpadDetailApproveDialog
				show={showApproveModal}
				projectName={projectSelected?.name || ''}
				amountSymbol={projectSelected?.symbol || 'USDT'}
				balance={1}
				onClose={() => setShowApproveModal(false)}
				onApprove={handleApprove}
			/>
		</>
	);
};
export default SolLaunchpadDetailPoolCardContainer;
