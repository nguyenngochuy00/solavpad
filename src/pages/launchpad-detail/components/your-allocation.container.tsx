// import SolLaunchpadDetailAllocation from "src/components/organisms/launchpad-detail/your-allocation";

import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SolLaunchpadDetailAllocation from '../../../components/organisms/launchpad-detail/your-allocation';
import { AppState } from '../../../redux/rootReducer';
import { idoService, solaUtils } from '../../../services/blockchain';
import {
	CalculateAllowInfoResult,
	ClaimTokenIdoParams
} from '../../../types/ido.type';
import { getLaunchpadDetail } from '../redux/actions';

const SolLaunchpadDetailYourAllocationContainer: React.FC = () => {
	const connection = useConnection();
	const { publicKey, connected } = useWallet();
	const dispatch = useDispatch();
	const projectSelected = useSelector(
		(state: AppState) => state.launchpadDetail.launchpad
	);
	const anchorWallet = useAnchorWallet();



	const [allocations, setAllocations] = useState<CalculateAllowInfoResult>({
		layout: 1,
		infoAllocation: []
	});

	const [decimals, setDecimals] = useState<number>(9);

	useEffect(() => {
		if (!projectSelected?.contract || !publicKey || !connected  ) return;
		solaUtils
			.getAllocationsInfo(projectSelected.contract, publicKey)
			.then(result => {
				if (!result) return;
				setAllocations(result);
				setDecimals(projectSelected.decimals);
			});
	}, [projectSelected, publicKey]);

	const handleClaimToken = async (index: number) => {
		if (!publicKey || !projectSelected?.contract || !anchorWallet || !connection) {
			//show message that bai
			return;
		}

		const result = await idoService.claim(connection, anchorWallet, {
			contractAddress: projectSelected?.contract,
			index: index,
			wallet: publicKey
		} as ClaimTokenIdoParams);

		if (result.status) {
			dispatch(getLaunchpadDetail(String(projectSelected.id)));
			//show message that thanh cong
		} else {
			//show message that bai
		}
	};

	return (
		<SolLaunchpadDetailAllocation
			tokenDecimals={decimals}
			allocations={allocations.infoAllocation}
			layout={allocations.layout}
			onClaim={handleClaimToken}
		/>
	);
};
export default SolLaunchpadDetailYourAllocationContainer;
