// import SolStatistic from "src/components/molecules/statistic";
import SolStatistic from '../../../molecules/statistic';
import './index.scss';

interface Statistic {
	label?: string;
	value?: number;
}

interface SolStakingStatisticsProps {
	statistics: Statistic[];
}

const SolStakingStatistics = ({
	statistics = []
}: any) => {
	return statistics.length ? (
		<div className="sol-staking-statistics">
			{statistics.map((statistic:any, index: number) => (
				<SolStatistic
					key={index}
					label={statistic.label}
					value={statistic.value}
				/>
			))}
		</div>
	) : (
		<></>
	);
};
export default SolStakingStatistics;
