// import SolPageTitle from "src/components/molecules/page-title";
// import SolStakingStatistics from 'src/components/organisms/staking/statistics';
import { useEffect, useState } from 'react';
import SolPageTitle from '../../../components/molecules/page-title';
import SolStakingStatistics from '../../../components/organisms/staking/statistics';
import { formatNumberDownRound } from '../../../services/helpers';
import { StakingInfo } from '../../../types/staking.type';
interface SolStakingHeaderContainerProps {
	data?: StakingInfo;
}

const SolStakingHeaderContainer: React.FC<SolStakingHeaderContainerProps> = ({
	data
}: SolStakingHeaderContainerProps) => {
	const [statistics, setStatistics] = useState<
		{
			label: string;
			value: string | number;
		}[]
	>([
		{ label: 'Number of Stakers', value: '10,729' },
		{ label: 'Total SOLPAD Staked', value: '101,443,068.02' },
		{ label: 'APY', value: '15.00%' }
	]);
	useEffect(() => {
		if (data) {
			setStatistics([
				{ label: 'Number of Stakers', value: data.countStaker },
				{
					label: 'Total SOLPAD Staked',
					value: formatNumberDownRound(data.currentTotalStake)
				},
				{
					label: 'APY',
					value: `${Number(formatNumberDownRound(data.apy, 4)) * 100}%`
				}
			]);
		}
	}, [data]);

	return (
		<>
			<SolPageTitle>Solav Staking</SolPageTitle>
			<SolStakingStatistics statistics={statistics} />
		</>
	);
};
export default SolStakingHeaderContainer;
