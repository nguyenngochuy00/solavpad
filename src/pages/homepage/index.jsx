import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import SolPageTitle from "../../components/molecules/page-title";
import SolBridgeSelectAssetDialog from "../../components/organisms/bridge/select-asset-dialog";
import SolBridgeSelectNetworkDialog from "../../components/organisms/bridge/select-network-dialog";
import SolConnectWalletDialog from "../../components/organisms/common/connect-wallet-dialog";
import SolYourWalletDialog from "../../components/organisms/common/your-wallet-dialog";
import SolLaunchpadDetailApproveDialog from "../../components/organisms/launchpad-detail/approve-dialog";
import SolLaunchpadDetailJoinPoolDialog from "../../components/organisms/launchpad-detail/join-pool-dialog";
import SolHomepageTemplate from "../../components/templates/homepage";
import { getAddressInfo } from "../../utils/solana.web3";
import SolBridgeProcessDialog from "../../components/organisms/bridge/bridge-process-dialog";

const SolHomepage = () => {
  const { select, wallets, publicKey, disconnect } = useWallet();
  const [balance, setBalance] = useState(0);
  console.log(balance);

  const getBalanceOfWallet = async () => {
    try {
      const res = await getAddressInfo(publicKey);
      console.log("11111", res);
      setBalance(res);
    } catch (error) { }
  };

  useEffect(() => {
    if (publicKey) {
      getBalanceOfWallet(publicKey);
    } else {
      setBalance(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey]);

  const [showConnectWalletModal, setShowConnectWalletModal] = useState(false);
  const [showYourWalletModal, setShowYourWalletModal] = useState(false);
  const [showJoinPoolModal, setShowJoinPoolModal] = useState(false);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showSelectAssetModal, setShowSelectAssetModal] = useState(false);
  const [showSelectNetworkModal, setShowSelectNetworkModal] = useState(false);
  const [showBridgeProcessModal, setShowBridgeProcessModal] = useState(true);

  return (
    <>
      <SolHomepageTemplate />
      <Container>
        <SolPageTitle>Homepage</SolPageTitle>

        {/* Connect wallet modal */}
        <SolConnectWalletDialog
          show={showConnectWalletModal}
          extensions={[
            { name: 'Metamask', logo: '/images/icons/metamask.svg' },
            { name: 'Binance Chain Wallet', logo: '/images/icons/binance-chain-wallet.svg' },
            { name: 'Trust Wallet', logo: '/images/icons/trust.svg' }
          ]}
          onSelect={() => setShowConnectWalletModal(false)}
          onClose={() => setShowConnectWalletModal(false)}
        />

        {/* Your wallet info modal */}
        <SolYourWalletDialog
          show={showYourWalletModal}
          walletAddress="0xE0493DD5F947A93B8C0d750d317c46F393a0FBA2"
          walletUrl="http://abc.com"
          onClose={() => setShowYourWalletModal(false)}
        />

        {/* Join pool modal */}
        <SolLaunchpadDetailJoinPoolDialog
          show={showJoinPoolModal}
          projectName="BlastFi"
          amountSymbol='USDB'
          balance={3000}
          onClose={() => setShowJoinPoolModal(false)}
          onJoin={() => setShowJoinPoolModal(false)}
        />

        {/* Approve modal */}
        <SolLaunchpadDetailApproveDialog
          show={showApproveModal}
          projectName="BlastFi"
          amountSymbol='USDB'
          balance={3000}
          onClose={() => setShowApproveModal(false)}
          onApprove={() => setShowApproveModal(false)}
        />

        {/* Select asset modal */}
        <SolBridgeSelectAssetDialog
          show={showSelectAssetModal}
          assets={[
            { name: 'Solana', logo: '/images/icons/solana.svg' },
            { name: 'Ethereum', logo: '/images/icons/ethereum.svg' },
            { name: 'BNB Chain', logo: '/images/icons/bsc-icon.svg' }
          ]}
          selectedAsset={{ name: 'Ethereum', logo: '/images/icons/ethereum.svg' }}
          onSearch={() => { }}
          onSelect={() => setShowSelectAssetModal(false)}
          onClose={() => setShowSelectAssetModal(false)}
        />

        {/* Select network modal */}
        <SolBridgeSelectNetworkDialog
          show={showSelectNetworkModal}
          networks={[
            { name: 'Ethereum', logo: '/images/icons/ethereum.svg' },
            { name: 'Solana', logo: '/images/icons/solana.svg' },
            { name: 'BNB Chain', logo: '/images/icons/bsc-icon.svg' }
          ]}
          selectedNetwork={{ name: 'BNB Chain', logo: '/images/icons/bsc-icon.svg' }}
          onSelect={() => setShowSelectNetworkModal(false)}
          onClose={() => setShowSelectNetworkModal(false)}
        />

        {/* Bridge process modal */}
        <SolBridgeProcessDialog
          show={showBridgeProcessModal}
          onClose={() => setShowBridgeProcessModal(false)}
        />

        {/* default connect button */}
        <WalletMultiButton />
        {/* custom connect button */}
        {!publicKey ? (
          wallets.filter((wallet) => wallet.readyState === "Installed").length >
            0 ? (
            wallets
              .filter((wallet) => wallet.readyState === "Installed")
              .map((wallet) => (
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
