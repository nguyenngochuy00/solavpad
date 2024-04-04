// import SolLaunchpadDetailAllocation from "src/components/organisms/launchpad-detail/your-allocation";

import {
	useAnchorWallet,
	useConnection,
	useWallet
} from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import SolLaunchpadDetailAllocation from '../../../components/organisms/launchpad-detail/your-allocation';
import { AppState } from '../../../redux/rootReducer';
import { solaUtils } from '../../../services/blockchain';
import { hideWalletAddress } from '../../../services/helpers';
import { CalculateAllowInfoResult } from '../../../types/ido.type';
import { claimToken, claimTokenFail } from '../redux/actions';

const SolLaunchpadDetailYourAllocationContainer: React.FC = () => {
	const connection = useConnection();
	const { publicKey, connected } = useWallet();
	const dispatch = useDispatch();
	const projectSelected = useSelector(
		(state: AppState) => state.launchpadDetail.launchpad
	);
	const anchorWallet = useAnchorWallet();

	const isClaimTokenSuccess = useSelector(
		(state: AppState) => state.launchpadDetail.isClaimTokenSuccess
	);

	const transactionValue = useSelector(
		(state: AppState) => state.launchpadDetail.transaction
	);

	const [allocations, setAllocations] = useState<CalculateAllowInfoResult>({
		layout: 1,
		infoAllocation: []
	});

	const [decimals, setDecimals] = useState<number>(9);

	useEffect(() => {
		if (!projectSelected?.contract || !publicKey || !connected) return;
		solaUtils
			.getAllocationsInfo(projectSelected.contract, publicKey)
			.then(result => {
				if (!result) return;
				setAllocations(result);
				setDecimals(projectSelected.decimals);
			});
	}, [projectSelected, publicKey]);

	useEffect(() => {
		if (isClaimTokenSuccess && transactionValue.length) {
			const transactionLink = (transaction: string) =>
				`https://explorer.solana.com/tx/${transaction}?cluster=devnet`;
			const notifySuccessfull = () => toast.success('Successfully!');
			const ToastContent = () => {
				return (
					<a
						className="transaction-link"
						href={transactionLink(transactionValue)}
						target="_blank"
						rel="noopener noreferrer"
					>
						Transaction: [<span>{hideWalletAddress(transactionValue)}</span>]
						confirmed!
					</a>
				);
			};
			const notifyTransaction = () => toast.success(<ToastContent />);
			notifySuccessfull();
			notifyTransaction();
			dispatch(claimTokenFail());
		}
	}, [isClaimTokenSuccess, transactionValue]);

	const handleClaimToken = async (index: number) => {
		if (
			!publicKey ||
			!projectSelected?.contract ||
			!anchorWallet ||
			!connection
		) {
			//show message that bai
			return;
		}
		dispatch(
			claimToken({
				index: index,
				anchorWallet: anchorWallet,
				connection: connection,
				contractAddress: projectSelected.contract,
				wallet: publicKey
			})
		);
	};

	return (
		<SolLaunchpadDetailAllocation
			tokenDecimals={decimals}
			allocations={allocations.infoAllocation}
			layout={allocations.layout}
			onClaim={handleClaimToken}
		/>
	);
};
export default SolLaunchpadDetailYourAllocationContainer;
