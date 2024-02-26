import { Link } from "react-router-dom";
import { APP_ROUTES } from "src/constants";
import "./index.scss";

const SolStakingStakeStep1 = ({
    symbol,
    connectedWallet = false,
    tokenAvaiable = 0,
    balanceAvailable = 0,
    balanceSymbol,
    networkName,
    stakeable = false,
    confirmed = false,
    onConfirm
}) => {
    return <div className="sol-staking-stake-step1">
        <div className="sol-staking-step-title">Checkpoints</div>
        <div className="sol-staking-step-description">The following conditions must be met to proceed:</div>
        <div className="sol-staking-step-card">
            {/* Checkpoint #1 */}
            <div className="sol-staking-step-card-item">
                <div className="icon">
                    <img src={connectedWallet ? '/images/icons/avail.svg' : '/images/icons/not-avail.svg'} alt="" />
                </div>
                <div className="info">
                    <h5>Connected with MetaMask</h5>
                    <div>If not connected, click the "Connect Wallet" button in the top right corner</div>
                </div>
            </div>

            {/* Checkpoint #2 */}
            <div className="sol-staking-step-card-item">
                <div className="icon">
                    <img src={tokenAvaiable ? '/images/icons/avail.svg' : '/images/icons/not-avail.svg'} alt="" />
                </div>
                <div className="info">
                    <h5>{symbol} available to deposit</h5>
                    <div>Current Balance: {tokenAvaiable}</div>
                </div>
            </div>

            {/* Checkpoint #3 */}
            <div className="sol-staking-step-card-item">
                <div className="icon">
                    <img src={balanceAvailable ? '/images/icons/avail.svg' : '/images/icons/not-avail.svg'} alt="" />
                </div>
                <div className="info">
                    <h5>{balanceSymbol} available in wallet</h5>
                    <div>{balanceSymbol} is required to pay transaction fees on the {networkName} network. {balanceSymbol} Balance: 0.0000</div>
                </div>
            </div>

            {/* Checkpoint #4 */}
            <div className="sol-staking-step-card-item">
                <div className="icon">
                    <img src={stakeable ? '/images/icons/avail.svg' : '/images/icons/not-avail.svg'} alt="" />
                </div>
                <div className="info">
                    <h5>Eligible to stake</h5>
                    <div>You cannot stake if you have an active {symbol} unstake/withdrawal request</div>
                </div>
            </div>
        </div>
        <div className="sol-staking-step-confirm">
            <input type="checkbox" checked={confirmed} onChange={e => onConfirm(e.target.checked)} />
            <span>I have read the <Link to={APP_ROUTES.SUPPORT.url}>Terms and Conditions</Link></span>
        </div>
    </div>
}
export default SolStakingStakeStep1