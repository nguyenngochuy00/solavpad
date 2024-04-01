import { get } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SolLaunchpadDetailApproveDialog from '../../../components/organisms/launchpad-detail/approve-dialog';
import SolLaunchpadDetailJoinPoolDialog from '../../../components/organisms/launchpad-detail/join-pool-dialog';
import SolLaunchpadDetailPoolCard from '../../../components/organisms/launchpad-detail/pool-card';
import { useBlockLatest, useSolBalance } from '../../../hooks/useState';
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

	const [walletInfo, setWalletInfo] = useState<WalletInfo>();
	const [enableJoinBtn, setEnableJoinBtn] = useState<boolean>(false);
	const [recallWalletInfor, setRecallWalletInfor] = useState<boolean>(false)


	const connection = useConnection();
	const { publicKey, connected } = useWallet();


	const handleJoinPool = async (amount: number) => {
		if (!publicKey || !connection || !projectSelected?.contract){
			//show message
			return;
		} 
		const result = await idoService.joinIdo(connection, {
			amount: amount, //doing sua lai amount cho dung
			contractAddress: projectSelected.contract?.toString(),
			raiseTokenMint: projectSelected.raiseToken.toString(),
			wallet: publicKey
		} as JoinIdoParams);
		
		setShowJoinModal(false);
		if(result.status) {
			//show message that thanh cong
		} else {
			//show message that bai
		}
		
		
	};


	useEffect(() => {
		debugger
		if(!projectSelected?.contract || !walletInfo) return;

		setEnableJoinBtn(true);

		if(projectSelected?.state === 'P' || projectSelected?.state === 'C' || projectSelected.contract === 'TBA'){
			setEnableJoinBtn(false);
			return;
		}

		if(!walletInfo?.remainingAllocation || walletInfo?.remainingAllocation === '0'){
			setEnableJoinBtn(false);
			return;
		}
		if (!(walletInfo.roundState === 1 || walletInfo.roundState === 3)) {
            setEnableJoinBtn(false);
            return;
          }

	},[projectSelected, walletInfo])

	useEffect(() => {
		const fetchData = async () => {
			if (!projectSelected?.contract || !publicKey) return;
			const result = await solaUtils.getWalletInfo(
				projectSelected?.contract,
				publicKey
			);

			if (!result) return;
			// console.log('result', result);
			setWalletInfo(result);
			setRecallWalletInfor(false);
		};
		fetchData();
	}, [projectSelected, connected, recallWalletInfor]);

	const handleShowConnectWallet: VoidFunction = () => {
		dispatch(toggleConnectWallet(true));
	};

	return (
		<>
			<SolLaunchpadDetailPoolCard
				enableJoin={enableJoinBtn}
				opening
				projectInfor={projectSelected}
				walletInfo={walletInfo}
				onJoinPool={() => setShowJoinModal(true)}
				// onApprove={() => setShowApproveModal(true)}
				onConnectWallet={() => handleShowConnectWallet()}
				onRecallWalletInfo={() => setRecallWalletInfor(true)}
				
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
