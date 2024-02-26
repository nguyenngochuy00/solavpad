import SolStakingStep from "src/components/organisms/common/staking-step";
import "./index.scss";

const SolStakingStakeStep2 = ({ stakeAmount = 0, stakingSymbol, onStakeAmountChange }) => {
    return <SolStakingStep
        title="How much do you want to stake?"
        description={`Please enter the amount of ${stakingSymbol} you want to stake`}
        className="sol-staking-stake-step2"
    >
        <input
            autoFocus
            type="number"
            className="sol-staking-stake-input"
            placeholder="0.0000"
            min={0.0001}
            value={stakeAmount}
            onChange={e => onStakeAmountChange(e.target.value)}
        />
        <div className="sol-staking-stake-balance">
            Your balance: <b>{stakeAmount} {stakingSymbol}</b>
        </div>
    </SolStakingStep>
}
export default SolStakingStakeStep2