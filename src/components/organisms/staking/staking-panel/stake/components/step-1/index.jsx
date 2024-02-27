import { Link } from "react-router-dom";
import SolCheckpoints from "src/components/organisms/common/checkpoints";
import SolStakingStep from "src/components/organisms/common/staking-step";
import { APP_ROUTES } from "src/constants";

const SolStakingStakeStep1 = ({
    connectedWallet = false,
    stakingSymbol,
    currentBalance = 0,
    paymentBalance = 0,
    paymentSymbol,
    paymentNetwork,
    stakeable = false,
    confirmedStake = false,
    onConfirmStake
}) => {
    return <SolStakingStep
        title="Checkpoints"
        description="The following conditions must be met to proceed:"
        confirm={<>
            <input type="checkbox" checked={confirmedStake} onChange={e => onConfirmStake(e.target.checked)} />
            <span>I have read the <Link to={APP_ROUTES.SUPPORTS.url}>Terms and Conditions</Link></span>
        </>}
        className="sol-staking-stake-step1"
    >
        <SolCheckpoints
            checkpoints={[
                {
                    checked: connectedWallet,
                    title: 'Connected with MetaMask',
                    description: 'If not connected, click the "Connect Wallet" button in the top right corner'
                }, {
                    checked: currentBalance,
                    title: `${stakingSymbol} available to deposit`,
                    description: `Current Balance: ${currentBalance}`
                }, {
                    checked: paymentBalance,
                    title: `${paymentSymbol} available in wallet`,
                    description: `${paymentSymbol} is required to pay transaction fees on the ${paymentNetwork} network. ${paymentSymbol} Balance: ${paymentBalance}`
                }, {
                    checked: stakeable,
                    title: 'Eligible to stake',
                    description: `You cannot stake if you have an active ${stakingSymbol} unstake/withdrawal request`
                }
            ]}
        />
    </SolStakingStep>
}
export default SolStakingStakeStep1