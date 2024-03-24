// import SolLaunchpadDetailAllocation from "src/components/organisms/launchpad-detail/your-allocation";

import SolLaunchpadDetailAllocation from '../../../components/organisms/launchpad-detail/your-allocation';

interface SolLaunchpadDetailYourAllocationContainerProps {
	data: any;
	claimable: boolean;
}

const SolLaunchpadDetailYourAllocationContainer: React.FC<
	SolLaunchpadDetailYourAllocationContainerProps
> = ({ data, claimable }: SolLaunchpadDetailYourAllocationContainerProps) => {
	const handleClaimToken = (allocation: any, index: number) => {
		console.log(allocation, index);
	};

	return (
		<SolLaunchpadDetailAllocation
			allocations={data}
			onClaim={claimable ? handleClaimToken : null}
		/>
	);
};
export default SolLaunchpadDetailYourAllocationContainer;
