import SolStakingStake from "./components/stake";
import SolStakingUnstake from "./components/unstake";
import SolStakingWithdraw from "./components/withdraw";
import "./index.scss";

const SolStakingPanel = () => {
    return <div className="sol-staking-panel">
        <div>Tabs</div>
        <SolStakingStake />
        <SolStakingUnstake />
        <SolStakingWithdraw />
    </div>
}
export default SolStakingPanel