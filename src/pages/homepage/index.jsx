import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import SolButtonSample from '../../components/atoms/button/sample';
import SolCardSample from '../../components/molecules/card/sample';
import SolInfoSample from '../../components/molecules/info-block/sample';
import SolPageTitle from '../../components/molecules/page-title';
import SolPoolImageSample from '../../components/molecules/pool-image/sample';
import SolProgressBarSample from '../../components/molecules/progress-bar/sample';
import SolStatisticSample from '../../components/molecules/statistic/sample';
import SolHomepageTemplate from '../../components/templates/homepage';
import { getAddressInfo } from '../../utils/solana.web3';

const SolHomepage = () => {
	const { select, wallets, publicKey, disconnect } = useWallet();
	const [balance, setBalance] = useState(0);
	console.log(balance);

	const getBalanceOfWallet = async () => {
		try {
			const res = await getAddressInfo(publicKey);
			console.log('11111', res);
			setBalance(res);
		} catch (error) {}
	};

	useEffect(() => {
		if (publicKey) {
			getBalanceOfWallet(publicKey);
		} else {
			setBalance(0);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [publicKey]);

	return (
		<>
			<SolHomepageTemplate />
			<Container>
				<SolPageTitle>Homepage</SolPageTitle>
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
				<SolCardSample />
				<SolStatisticSample />
				<SolProgressBarSample />
				<SolInfoSample />
				<SolPoolImageSample />
			</Container>
		</>
	);
};
export default SolHomepage;
