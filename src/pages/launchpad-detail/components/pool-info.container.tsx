// import SolLaunchpadDetailPoolInfo from 'src/components/organisms/launchpad-detail/pool-info';

import SolLaunchpadDetailPoolInfo from '../../../components/organisms/launchpad-detail/pool-info';
import { IdoInfoType, ProjectDetail } from '../../../types';
import { WalletInfo } from '../../../types/ido.type';

interface SolLaunchpadDetailPoolInfoContainerProps {
	projectInfo: ProjectDetail | undefined;
}

const SolLaunchpadDetailPoolInfoContainer: React.FC<
	SolLaunchpadDetailPoolInfoContainerProps> = ({ projectInfo }: SolLaunchpadDetailPoolInfoContainerProps) => {
	return (
		<SolLaunchpadDetailPoolInfo projectInfo={projectInfo}  />
	);
};
export default SolLaunchpadDetailPoolInfoContainer;
