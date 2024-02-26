import "./index.scss";

const SolStakingStakeStep5 = ({symbol}) => {
    return <div className="sol-staking-stake-step5">
        <div className="sol-staking-step-title">Successfully!</div>
        <div className="sol-staking-step-description">
            <p>Congratulations! <br />
                You have completed the {symbol} staking process.</p>
            <p className="sol-staking-step-highlight">Please check Binance to see if the transaction was successful.</p>
        </div>
    </div>
}
export default SolStakingStakeStep5