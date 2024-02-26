import SolStakingStep from "src/components/organisms/common/staking-step"

const SolStakingWithdrawStep2 = () => {
    return <SolStakingStep
        title="Initialize Withdrawal"
        description={<>
            <p><small><i>(1st of 2 transactions required.)</i></small></p>
            <p>The withdrawal process has two steps. On the first transaction the withdrawal is initialized, and after 7 days passed a second withdrawal confirmation is required to finalize the process. </p>
            <p className="sol-staking-step-highlight">You will now be asked to confirm the withdrawal initialization by sending a web3 wallet transaction.</p>
        </>}
        className="sol-staking-withdraw-step2"
    >
    </SolStakingStep>
}
export default SolStakingWithdrawStep2