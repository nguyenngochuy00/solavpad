import { useState } from "react";
import SolButton from "src/components/atoms/button";
import SolModal from "src/components/atoms/modal";
import "./index.scss";

const SolYourWalletDialog = ({ show, walletAddress, walletUrl, onClose }) => {
    const [copied, setCopied] = useState(false);

    const handleViewOnBSCScan = () => {
        window.open(walletUrl, '_blank');
    }

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(walletAddress);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000)
    }

    return <SolModal show={show} className="sol-your-wallet-dialog" title="Your wallet" onClose={onClose}>
        <div className="sol-wallet-info">
            <div className="sol-wallet-address">{walletAddress}</div>
            <div className="sol-wallet-message">{copied ? 'Copied successfully!' : <></>}</div>
        </div>
        <div className="sol-wallet-action">
            <SolButton caption="View on BscScan" onClick={handleViewOnBSCScan} />
            <SolButton caption="Copy address" variant="primary" disabled={copied} onClick={handleCopyAddress} />
        </div>
    </SolModal>
}
export default SolYourWalletDialog