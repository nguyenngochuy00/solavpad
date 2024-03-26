// import SolButton from 'src/components/atoms/button';
// import SolBreadcrumb from 'src/components/molecules/breadcrumb';
import './index.scss';
import { Link } from 'react-router-dom';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { updateWalletInfo } from 'src/redux/actions/applicationAction';
// import { SOLANA_EXPLORER_URL } from 'src/constants';
// import { formatNumberDownRound, minimizeAddress } from 'src/services/helpers';
// import { getAddressInfo } from 'src/services/blockchain/solana.web3';
// import { useSolBalance } from 'src/hooks/useState';
import { PublicKey } from '@solana/web3.js';
import { useSolBalance } from '../../../../hooks/useState';
import { updateWalletInfo } from '../../../../redux/actions/applicationAction';
import { solaUtils } from '../../../../services/blockchain/solana.web3';
import { SOLANA_EXPLORER_URL } from '../../../../constants';
import SolBreadcrumb from '../../../molecules/breadcrumb';
import SolButton from '../../../atoms/button';
import {
	formatNumberDownRound,
	minimizeAddress
} from '../../../../services/helpers/helpers';

type BreadcrumbItem = {
	label?: string;
	path?: string;
};

type Props = {
	walletInfo?: boolean;
	breadcrumbs?: any;
	onClickConnectWallet?: () => void;
	onClickWallet?: () => void;
	onToggleSidebar?: () => void;
	onDisconnectWallet?: () => void;
};

const SolHeader = ({
	walletInfo,
	breadcrumbs,
	onClickConnectWallet,
	onClickWallet,
	onToggleSidebar,
	onDisconnectWallet
}: Props) => {
	const dispatch = useDispatch();
	const { publicKey, disconnect } = useWallet();

	const solBal = useSolBalance();

	useEffect(() => {
		if (publicKey) {
			getWalletInfo(publicKey);
		} else {
			dispatch(
				updateWalletInfo({
					connected: false,
					address: '',
					walletUrl: '',
					solBalance: 0
				})
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [publicKey]);

	const getWalletInfo = async (publicKey: PublicKey) => {
		try {
			const res = await solaUtils.getAddressInfo(String(publicKey));
			const walletAddress = publicKey.toBase58();
			dispatch(
				updateWalletInfo({
					connected: true,
					address: walletAddress,
					walletUrl: `${SOLANA_EXPLORER_URL}/address/${walletAddress}`,
					solBalance: res
				})
			);
		} catch (error) {}
	};

	return (
		<div className="sol-header">
			<Link to="/" className="sol-logo-sm">
				<img src="/images/logo.png" alt="" />
			</Link>
			<SolBreadcrumb items={breadcrumbs} />
			<div className="sol-header-right">
				{!publicKey ? (
					<WalletMultiButton />
				) : (
					<>
						<SolButton
							className="sol-btn-disconnect"
							caption={`◎${formatNumberDownRound(solBal)}`}
						/>
						<SolButton
							className="sol-btn-your-wallet"
							caption={minimizeAddress(publicKey.toBase58())}
							variant="primary"
							icon={<img src="/images/icons/wallet.svg" alt="" />}
							onClick={onClickWallet}
						/>
						<SolButton
							className="sol-btn-disconnect"
							icon={<img src="/images/icons/off.svg" alt="" />}
							caption="Disconnect"
							onClick={disconnect}
						/>
					</>
				)}
				{/* {!walletInfo ? (
					<SolButton
						caption="Connect wallet"
						variant="primary"
						icon={<img src="/images/icons/wallet.svg" alt="" />}
						onClick={onClickConnectWallet}
					/>
				) : (
					<>
						<SolButton
							className="sol-btn-your-wallet"
							caption="0x23323...42323"
							variant="primary"
							icon={<img src="/images/icons/wallet.svg" alt="" />}
							onClick={onClickWallet}
						/>
						<SolButton
							className="sol-btn-disconnect"
							icon={<img src="/images/icons/off.svg" alt="" />}
							caption="Disconnect"
							onClick={onDisconnectWallet}
						/>
					</>
				)} */}
			</div>
			<button
				type="button"
				className="sol-btn-toggle"
				onClick={onToggleSidebar}
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
						fill="white"
					/>
					<path
						d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
						fill="white"
					/>
					<path
						d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
						fill="white"
					/>
				</svg>
			</button>
		</div>
	);
};
export default SolHeader;
