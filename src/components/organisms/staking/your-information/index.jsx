import SolButton from "src/components/atoms/button";
import "./index.scss";

const SolStakingYourInformation = ({ staked = '0.0000', unstaked = '0.0000', rewards = '0.0000', symbol, onStake, onWithdraw }) => {
    return <div className="sol-staking-your-information">
        <div className="sol-staking-your-information-block">
            <label>Your Staked</label>
            <b>{staked}</b>
        </div>
        <div className="sol-staking-your-information-block">
            <label>Your Unstaked</label>
            <b>{unstaked}</b>
        </div>
        <div className="sol-staking-your-information-block last">
            <label>Your Rewards</label>
            <b>{rewards}</b>
        </div>
        <div className="sol-staking-your-information-action">
            <SolButton onClick={onStake} variant="primary" caption="Stake" />
            <SolButton onClick={onWithdraw} caption="Withdraw" />
        </div>
    </div>
}
export default SolStakingYourInformation