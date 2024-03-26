// import SolLaunchpadDetailPoolInfo from 'src/components/organisms/launchpad-detail/pool-info';

import SolLaunchpadDetailPoolInfo from '../../../components/organisms/launchpad-detail/pool-info';
import { IdoInfoType, ProjectDetail } from '../../../types';

interface SolLaunchpadDetailPoolInfoContainerProps {
	projectInfo: ProjectDetail | undefined;
	idoInfo: ProjectDetail | undefined;
}

const SolLaunchpadDetailPoolInfoContainer: React.FC<
	SolLaunchpadDetailPoolInfoContainerProps
> = ({ projectInfo, idoInfo }: SolLaunchpadDetailPoolInfoContainerProps) => {
	return (
		<SolLaunchpadDetailPoolInfo projectInfo={projectInfo} idoInfo={idoInfo} />
	);
};
export default SolLaunchpadDetailPoolInfoContainer;
