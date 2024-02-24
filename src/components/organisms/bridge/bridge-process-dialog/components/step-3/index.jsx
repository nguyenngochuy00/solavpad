import "./index.scss";

const SolBridgeProcessStep3 = ({ symbol }) => {
    return <div className="sol-bridge-process-step3">
        <div className="sol-bridge-process-title">Confirm</div>
        <div className="sol-bridge-process-description">
            <p><small><i>(2nd of 2 transactions required)</i></small></p>
            <p>Second transaction is the Swap step, where the provided amount of <b>{symbol}</b> tokens will be swapped via the contract.</p>
        </div>
        <div className="sol-bridge-process-note">
            <img src="/images/icons/warning.svg" alt="" />
            <span>This is the last transaction you need to make to finalize the swap.</span>
        </div>
    </div>
}
export default SolBridgeProcessStep3