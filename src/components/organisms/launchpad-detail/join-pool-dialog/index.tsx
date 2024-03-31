import { useState } from 'react';
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

	const handleJoinPool = () => {
		if(onJoin) onJoin(amount)
	}

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
