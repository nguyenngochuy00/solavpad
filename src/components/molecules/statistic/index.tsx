import './index.scss';

type Props = { value?: string | number; label?: string };

const SolStatistic = ({ value = '0', label = '' }: Props) => {
	return (
		<div className="sol-statistic">
			<div className="sol-statistic-value">{value}</div>
			<div className="sol-statistic-label">{label}</div>
		</div>
	);
};
export default SolStatistic;
