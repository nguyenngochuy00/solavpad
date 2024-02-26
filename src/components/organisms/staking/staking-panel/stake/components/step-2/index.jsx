import "./index.scss";

const SolStakingStakeStep2 = ({ amount, symbol, onAmountChange }) => {
    return <div className="sol-staking-stake-step2">
        <div className="sol-staking-step-title">How much do you want to stake?</div>
        <div className="sol-staking-step-description">Please enter the amount of {symbol} you want to stake</div>
        <input
            autoFocus
            type="number"
            className="sol-staking-stake-input"
            placeholder="0.0000"
            min={0.0001}
            value={amount}
            onChange={e => onAmountChange(e.target.value)}
        />
        <div className="sol-staking-stake-balance">
            Your balance: <b>{amount} {symbol}</b>
        </div>
    </div>
}
export default SolStakingStakeStep2