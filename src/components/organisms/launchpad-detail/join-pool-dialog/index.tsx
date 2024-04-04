import {
	useAnchorWallet,
	useConnection,
	useWallet
} from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
	joinPool,
	joinPoolFail
} from '../../../../pages/launchpad-detail/redux/actions';
import { AppState } from '../../../../redux/rootReducer';
import { hideWalletAddress } from '../../../../services/helpers';
import SolButton from '../../../atoms/button';
import SolModal from '../../../atoms/modal';
// import SolButton from 'src/components/atoms/button';
// import SolModal from 'src/components/atoms/modal';
import './index.scss';

interface SolLaunchpadDetailJoinPoolDialogProps {
	show?: boolean;
	projectName?: string;
	amountSymbol?: string;
	balance?: number | undefined | string;
	onClose?: () => void;
	onJoin?: (amount: number) => void;
}

const SolLaunchpadDetailJoinPoolDialog = ({
	show,
	projectName,
	amountSymbol,
	balance = 0,
	onClose,
	onJoin
}: SolLaunchpadDetailJoinPoolDialogProps) => {
	const [amount, setAmount] = useState(0);
	const dispatch = useDispatch();
	const connection = useConnection();
	const { publicKey, connected } = useWallet();
	const anchorWallet = useAnchorWallet();
	const projectSelected = useSelector(
		(state: AppState) => state.launchpadDetail.launchpad
	);

	const isJoinPoolSuccess = useSelector(
		(state: AppState) => state.launchpadDetail.isJoinPoolSuccess
	);

	const transactionValue = useSelector(
		(state: AppState) => state.launchpadDetail.transaction
	);

	const handleJoinPool = () => {
		if (
			!publicKey ||
			!anchorWallet ||
			!projectSelected?.contract ||
			!connection
		) {
			//show message
			return;
		}
		
		dispatch(
			joinPool({
				amount: amount,
				anchorWallet: anchorWallet,
				connection: connection,
				contractAddress: projectSelected.contract?.toString(),
				raiseTokenMint: projectSelected.raiseToken.toString(),
				wallet: publicKey
			})
		);
	};

	useEffect(() => {
		if (isJoinPoolSuccess && amount !== 0 && transactionValue.length) {
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

			setAmount(0);
			if (onClose) onClose();
			//Toast
			notifySuccessfull();
			notifyTransaction();
			dispatch(joinPoolFail());
		}
	}, [isJoinPoolSuccess, transactionValue]);

	const handleMaxAmount = () => {
		setAmount(Number(balance));
	};

	return (
		<SolModal
			show={show}
			className="sol-launchpad-detail-join-pool-dialog"
			title={`Join ${projectName} Pool`}
			onClose={onClose}
		>
			<div className="sol-form-group">
				<div className="sol-form-label">{amountSymbol} Amount</div>
				<div className="sol-input-amount">
					<input
						type="number"
						className="sol-input"
						placeholder="0.0000"
						value={amount}
						onChange={e => setAmount(Number(e.target.value))}
					/>
					<button
						type="button"
						className="sol-btn-max"
						onClick={handleMaxAmount}
					>
						Max
					</button>
				</div>
				<div className="sol-input-amount-balance">
					Your balance: <b>{balance}</b>
				</div>
			</div>
			<SolButton
				className="w-100"
				caption="Join"
				size="lg"
				variant="primary"
				disabled={amount <= 0 || amount > Number(balance)}
				onClick={handleJoinPool}
			/>
		</SolModal>
	);
};
export default SolLaunchpadDetailJoinPoolDialog;
