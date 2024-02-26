import SolStakingStep from "src/components/organisms/common/staking-step";

const SolStakingStakeStep4 = ({ stakingSymbol }) => {
    return <SolStakingStep
        title="Confirm"
        description={<>
            <p>Second transaction is the Stake step, where the provided amount of <b>{stakingSymbol}</b> tokens will be actually staked in the contract.</p>
            <p className="sol-staking-step-highlight">This is the last transaction you need to make to finalize the staking.</p>
        </>}
        className="sol-staking-stake-step4"
    >
    </SolStakingStep>
}
export default SolStakingStakeStep4