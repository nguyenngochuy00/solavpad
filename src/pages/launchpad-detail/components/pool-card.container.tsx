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

const SolLaunchpadDetailPoolCardContainer: React.FC<SolLaunchpadDetailPoolCardContainerProps> = ({projectSelected}: SolLaunchpadDetailPoolCardContainerProps ) => {
	const dispatch = useDispatch();
	const [showJoinModal, setShowJoinModal] = useState<boolean>(false);
	const [showApproveModal, setShowApproveModal] = useState<boolean>(false);
	const [walletInfo, setWalletInfo] = useState<WalletInfo>();

	const solBal = useSolBalance();


	const connection = useConnection();
	const { publicKey } = useWallet();
	const handleJoinPool: VoidFunction = () => {
		if(!publicKey || !connection || !projectSelected?.contract) return;
		idoService.joinIdo( connection, {
			amount: 1,
			contractAddress: projectSelected.contract?.toString(),
			raiseTokenMint: projectSelected.raiseToken.toString(),
			wallet: publicKey.toString()
		} as JoinIdoParams)

	};
	useEffect(() => {
		const fetchData = async () => {
			if (!projectSelected?.contract || !publicKey ) return;
			const result = await solaUtils.getWalletInfo(projectSelected?.contract, publicKey);

			if(!result) return;
			console.log('result', result);
			
			setWalletInfo(result);
		};
		fetchData();
	  }, [projectSelected]);

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
				countDownTime="0d 4h 42m 32s"
				yourTokenBalance={`${formatNumberDownRound(walletInfo?.tokenBalance, 9)} ${projectSelected?.symbol}`}
				yourNativeCoinBalance={`${formatNumberDownRound(solBal,9)} SOL`}
				yourTier= {walletInfo?.tierName}
				swappedValue={`${walletInfo?.userParticipation || 0} ${projectSelected?.symbol}`}
				swappedValueConvert={`${formatNumberDownRound(Number(projectSelected?.rate) * Number(walletInfo?.userParticipation))}     ${projectSelected?.projectTokenSymbol}`}
				remainingAllocation={`${formatNumberDownRound(walletInfo?.remainingAllocation)} ${projectSelected?.symbol}`}
				progressPercent={projectSelected?.participated /projectSelected?.cap}
				participants={projectSelected?.participatedCount || 0}
				onJoinPool={() => setShowJoinModal(true)}
				onApprove={() => setShowApproveModal(true)}
				onConnectWallet={() => handleShowConnectWallet()}
			/>
			<SolLaunchpadDetailJoinPoolDialog
				show={showJoinModal}
				projectName={projectSelected?.name || ""}
				amountSymbol={projectSelected?.symbol}
				balance={1}
				onClose={() => setShowJoinModal(false)}
				onJoin={handleJoinPool}
			/>
			<SolLaunchpadDetailApproveDialog
				show={showApproveModal}
				projectName={projectSelected?.name || ""}
				amountSymbol={projectSelected?.symbol || "USDT"}
				balance={1}
				onClose={() => setShowApproveModal(false)}
				onApprove={handleApprove}
			/>
		</>
	);
};
export default SolLaunchpadDetailPoolCardContainer;
