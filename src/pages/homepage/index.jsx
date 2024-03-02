import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import SolLaunchpadDetailApproveDialog from 'src/components/organisms/launchpad-detail/approve-dialog';
import SolLaunchpadDetailJoinPoolDialog from 'src/components/organisms/launchpad-detail/join-pool-dialog';
import SolHomepageMainContainer from './components/main.container';

const SolHomepage = () => {
	const { select, wallets, publicKey, disconnect } = useWallet();

	const [showJoinPoolModal, setShowJoinPoolModal] = useState(false);
	const [showApproveModal, setShowApproveModal] = useState(false);

	return (
		<>
			<SolHomepageMainContainer />
			<Container className="d-none">
				{/* Join pool modal */}
				<SolLaunchpadDetailJoinPoolDialog
					show={showJoinPoolModal}
					projectName="BlastFi"
					amountSymbol="USDB"
					balance={3000}
					onClose={() => setShowJoinPoolModal(false)}
					onJoin={() => setShowJoinPoolModal(false)}
				/>

				{/* Approve modal */}
				<SolLaunchpadDetailApproveDialog
					show={showApproveModal}
					projectName="BlastFi"
					amountSymbol="USDB"
					balance={3000}
					onClose={() => setShowApproveModal(false)}
					onApprove={() => setShowApproveModal(false)}
				/>

				{/* default connect button */}
				<WalletMultiButton />
				{/* custom connect button */}
				{!publicKey ? (
					wallets.filter(wallet => wallet.readyState === 'Installed').length >
					0 ? (
						wallets
							.filter(wallet => wallet.readyState === 'Installed')
							.map(wallet => (
								<Button
									key={wallet.adapter.name}
									onClick={() => select(wallet.adapter.name)}
									w="64"
									size="lg"
									fontSize="md"
									// leftIcon={
									//   <Image
									//     src={wallet.adapter.icon}
									//     alt={wallet.adapter.name}
									//     h={6}
									//     w={6}
									//   />
									// }
								>
									{wallet.adapter.name}
								</Button>
							))
					) : (
						<h3>No wallet found. Please download a supported Solana wallet</h3>
					)
				) : (
					<div>
						<h2>{publicKey.toBase58()}</h2>
						<Button onClick={disconnect}>Disconnect wallet</Button>
					</div>
				)}
			</Container>
		</>
	);
};
export default SolHomepage;
