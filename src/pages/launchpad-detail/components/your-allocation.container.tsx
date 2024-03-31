// import SolLaunchpadDetailAllocation from "src/components/organisms/launchpad-detail/your-allocation";

import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import SolLaunchpadDetailAllocation from '../../../components/organisms/launchpad-detail/your-allocation';
import { idoService } from '../../../services/blockchain';
import { AllocationItem, CalculateAllowInfoResult, ClaimTokenIdoParams } from '../../../types/ido.type';

interface SolLaunchpadDetailYourAllocationContainerProps {
	data: CalculateAllowInfoResult
	decimals: number,
	contract: string |null,
}

const SolLaunchpadDetailYourAllocationContainer: React.FC<
	SolLaunchpadDetailYourAllocationContainerProps
> = ({ data , decimals, contract}: SolLaunchpadDetailYourAllocationContainerProps) => {

	const connection = useConnection();
	const { publicKey } = useWallet();
	const handleClaimToken = async ( index: number) => {
		if(!publicKey || !contract || !connection) {
			//show message that bai
			return;
		};

		const result  = await idoService.claim(connection, {
			contractAddress: contract,
			index: index,
			wallet: publicKey
		} as ClaimTokenIdoParams );
		
		if(result.status) {
			//show message that thanh cong
		} else {
			//show message that bai
		}
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
