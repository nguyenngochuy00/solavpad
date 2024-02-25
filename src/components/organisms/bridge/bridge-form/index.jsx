import SolButton from "../../../atoms/button";
import "./index.scss";

const SolBridgeForm = ({ connectedWallet = false, onSelectAsset, onSelectNetwork, onConnectWallet, onSwap }) => {
    return <div className="sol-bridge-form">
        <div className="sol-bridge-form-body">

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