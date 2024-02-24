import "./index.scss";

const SolBridgeProcessStep1 = ({ amount, symbol, logo, fromNetwork, toNetwork, fee }) => {
    return <div className="sol-bridge-process-step1">
        <div className="sol-bridge-process-title">Pre-authorization</div>
        <div className="sol-bridge-process-description">
            <p>
                You want to swap <b>{amount} {symbol}</b> from <b>{fromNetwork}</b> to <b>{toNetwork}</b>
            </p>
        </div>
        <div className="sol-bridge-process-card">
            <ul>
                <li>
                    <label>Receive</label>
                    <div>
                        <img src={logo} alt="" />
                        <span>{amount} {symbol}</span>
                    </div>
                </li>
                <li>
                    <label>Swap Fee</label>
                    <div>{fee} {symbol}</div>
                </li>
            </ul>
        </div>
    </div>
}
export default SolBridgeProcessStep1