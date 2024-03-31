// import SolLaunchpadDetailAllocation from "src/components/organisms/launchpad-detail/your-allocation";

import SolLaunchpadDetailAllocation from '../../../components/organisms/launchpad-detail/your-allocation';
import { AllocationItem, CalculateAllowInfoResult } from '../../../types/ido.type';

interface SolLaunchpadDetailYourAllocationContainerProps {
	data: CalculateAllowInfoResult
	decimals: number
}

const SolLaunchpadDetailYourAllocationContainer: React.FC<
	SolLaunchpadDetailYourAllocationContainerProps
> = ({ data , decimals}: SolLaunchpadDetailYourAllocationContainerProps) => {

	const handleClaimToken = ( index: number) => {
		debugger
	};

	return (
		<SolLaunchpadDetailAllocation
			tokenDecimals={decimals}
			allocations={data.infoAllocation}
			layout={data.layout}
			onClaim={ handleClaimToken }
		/>
	);
};
export default SolLaunchpadDetailYourAllocationContainer;
