import SolProgressBar from "src/components/molecules/progress-bar";
import "./index.scss";

const SolStakingStakeStep3 = ({ percent }) => {
    return <div className="sol-staking-stake-step3">
        <div className="sol-staking-step-title">Pre-authorization</div>
        <div className="sol-staking-step-description">
            <p><small><i>(1st of 2 transactions required.)</i></small></p>
            <p>First transaction is the Pre-authorization step, where you allow staking contract to access your tokens upto the provided amount.</p>
            <p>You will be asked to confirm that allow the smart contract to have access to 0 BSCPAD from your wallet.</p>
            <p><SolProgressBar percent={percent} /></p>
            <p className="sol-staking-step-highlight">Please wait for the web3 wallet transaction to complete before any other action.</p>
        </div>
    </div>
}
export default SolStakingStakeStep3