import { get } from 'lodash';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SolLaunchpadDetailApproveDialog from 'src/components/organisms/launchpad-detail/approve-dialog';
import SolLaunchpadDetailJoinPoolDialog from 'src/components/organisms/launchpad-detail/join-pool-dialog';
import SolLaunchpadDetailPoolCard from 'src/components/organisms/launchpad-detail/pool-card';
import { toggleConnectWallet } from 'src/redux/actions/applicationAction';
import { useSolBalance } from '../../../hooks/useState';
import { formatNumberDownRound } from 'src/utils/helpers';

const SolLaunchpadDetailPoolCardContainer = () => {
	const dispatch = useDispatch();
	const [showJoinModal, setShowJoinModal] = useState(false);
	const [showApproveModal, setShowApproveModal] = useState(false);
	const solBal = useSolBalance();
	const walletInfo = useSelector(state =>
		get(state, 'system.walletInfo', false)
	);

	const handleJoinPool = () => {
		setShowJoinModal(false);
	};

	const handleApprove = () => {
		setShowApproveModal(false);
	};

	const handleShowConnectWallet = () => {
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
