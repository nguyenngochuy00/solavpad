import "./index.scss";

const SolBridgeProcessStep2 = ({amount, symbol }) => {
    return <div className="sol-bridge-process-step2">
        <div className="sol-bridge-process-title">Pre-authorization</div>
        <div className="sol-bridge-process-description">
            <p><small><i>(1st of 2 transactions required)</i></small></p>
            <p>First transaction is the Pre-authorization step, where you allow the contract to swap your tokens up to the defined amount.</p>
        </div>
        <div className="sol-bridge-process-note">
            <img src="/images/icons/warning.svg" alt="" />
            <span>You will be asked to confirm that you allow the smart contract to swap {amount} <b>{symbol}</b> from your wallet.</span>
        </div>
    </div>
}
export default SolBridgeProcessStep2