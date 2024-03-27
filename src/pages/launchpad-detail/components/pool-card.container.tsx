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
import { WalletInfo } from '../../../types/ido.type';
import { ProjectDetail } from '../../../types';
import { solaUtils } from '../../../services/blockchain';


interface SolLaunchpadDetailPoolCardContainerProps {
	data: ProjectDetail | undefined;
}

const SolLaunchpadDetailPoolCardContainer: React.FC<SolLaunchpadDetailPoolCardContainerProps> = ({data}: SolLaunchpadDetailPoolCardContainerProps ) => {
	const dispatch = useDispatch();
	const [showJoinModal, setShowJoinModal] = useState<boolean>(false);
	const [showApproveModal, setShowApproveModal] = useState<boolean>(false);
	const [walletInfo, setWalletInfo] = useState<WalletInfo>();

	const solBal = useSolBalance();


	const connection = useConnection();
	const { publicKey } = useWallet();
	const handleJoinPool: VoidFunction = () => {
		//
		


	};
	useEffect(() => {
		const fetchData = async () => {
			if (!data?.contract || !publicKey ) return;
			const result = await solaUtils.getWalletInfo(data?.contract, publicKey);

			console.log('result', result);
			
			setWalletInfo(result);
		};
		fetchData();
	  }, [data]);

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
				yourBalance={`${formatNumberDownRound(solBal)} SOL`}
				// yourBalanceConvert="3.0000 ETH"
				yourApprovedAmount="999.9999 BUSD"
				yourTier="Lottery Winners"
				swappedValue="11,780.0000 BUSD"
				swappedValueConvert="123,3.0000 CPO"
				remainingAllocation="99,999.9999 BUSD"
				progressPercent="80"
				participants="10"
				onJoinPool={() => setShowJoinModal(true)}
				onApprove={() => setShowApproveModal(true)}
				onConnectWallet={() => handleShowConnectWallet()}
			/>
			<SolLaunchpadDetailJoinPoolDialog
				show={showJoinModal}
				projectName="Cryptopolis (Blue Diamond Private)"
				amountSymbol="BBB"
				balance={1}
				onClose={() => setShowJoinModal(false)}
				onJoin={handleJoinPool}
			/>
			<SolLaunchpadDetailApproveDialog
				show={showApproveModal}
				projectName="Cryptopolis (Blue Diamond Private)"
				amountSymbol="BBB"
				balance={1}
				onClose={() => setShowApproveModal(false)}
				onApprove={handleApprove}
			/>
		</>
	);
};
export default SolLaunchpadDetailPoolCardContainer;
