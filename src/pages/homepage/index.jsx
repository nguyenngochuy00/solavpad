import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import SolPageTitle from "../../components/molecules/page-title";
import SolLaunchpadDetailApproveDialog from "../../components/organisms/launchpad-detail/approve-dialog";
import SolLaunchpadDetailJoinPoolDialog from "../../components/organisms/launchpad-detail/join-pool-dialog";
import SolHomepageTemplate from "../../components/templates/homepage";
import { getAddressInfo } from "../../utils/solana.web3";

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

  const [showJoinPoolModal, setShowJoinPoolModal] = useState(false);
  const [showApproveModal, setShowApproveModal] = useState(false);

  return (
    <>
      <SolHomepageTemplate />
      <Container>
        <SolPageTitle>Homepage</SolPageTitle>

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
