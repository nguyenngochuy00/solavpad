import "./index.scss";

const SolStakingStakeStep4 = ({symbol}) => {
    return <div className="sol-staking-stake-step4">
        <div className="sol-staking-step-title">Confirm</div>
        <div className="sol-staking-step-description">
            <p>Second transaction is the Stake step, where the provided amount of {symbol} tokens will be actually staked in the contract.</p>
            <p className="sol-staking-step-highlight">This is the last transaction you need to make to finalize the staking.</p>
        </div>
    </div>
}
export default SolStakingStakeStep4