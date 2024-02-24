import SolButton from "../../../atoms/button";
import "./index.scss";

const SolBridgeForm = ({ onSelectAsset, onSelectNetwork, onSwap }) => {
    return <div className="sol-bridge-form">
        <div className="sol-bridge-form-body">

        </div>
        <div className="sol-bridge-form-action">
            <SolButton size="lg" variant="primary" className="w-100" caption="Swap" onClick={onSwap} />
        </div>
    </div>
}
export default SolBridgeForm