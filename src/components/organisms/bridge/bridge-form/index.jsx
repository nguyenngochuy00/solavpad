import SolButton from "src/components/atoms/button";
import SolFormGroup from "src/components/molecules/form-group";
import "./index.scss";

const SolBridgeForm = ({ connectedWallet = false, onSelectAsset, onSelectNetwork, onConnectWallet, onSwap }) => {
    return <div className="sol-bridge-form">
        <div className="sol-bridge-form-body">
            <SolFormGroup label="Asset" placeholder="Select asset" leftIcon="..." />
            <div className="sol-bridge-form-row">
                <SolFormGroup
                    label="From"
                    placeholder="Select network"
                    leftIcon={<img src="/images/icons/blastfi.svg" alt="" />}
                    rightIcon={<img src="/images/icons/arrow-right.svg" alt="" />}
                    value="Blast Sepolia"
                    readOnly
                />
                <button type="button" className="sol-btn-swap">
                    <img src="/images/icons/swap.svg" alt="" />
                </button>
                <SolFormGroup
                    label="To"
                    placeholder="Select network"
                    leftIcon={<img src="/images/icons/bsc-icon.svg" alt="" />}
                    rightIcon={<img src="/images/icons/arrow-right.svg" alt="" />}
                    value="BNB Chain"
                    readOnly
                />
            </div>
        </div>
        <div className="sol-bridge-form-action">
            {connectedWallet ?
                <SolButton size="lg" variant="primary" className="w-100" caption="Swap" onClick={onSwap} /> :
                <SolButton size="lg" variant="primary" className="w-100" caption="Connect wallet" onClick={onConnectWallet} />
            }
        </div>
    </div>
}
export default SolBridgeForm