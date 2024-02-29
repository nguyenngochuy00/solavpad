import SolLaunchpadDetailAllocation from "src/components/organisms/launchpad-detail/your-allocation";

const SolLaunchpadDetailYourAllocationContainer = ({ data, claimable }) => {
    const handleClaimToken = (allocation, index) => {
        console.log(allocation, index);
    }

    return <SolLaunchpadDetailAllocation
        allocations={data}
        onClaim={claimable ? handleClaimToken : null}
    />
}
export default SolLaunchpadDetailYourAllocationContainer