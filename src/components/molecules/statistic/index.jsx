import './index.scss';

const SolStatistic = ({ value = '0', label = '' }) => {
	return (
		<div className="sol-statistic">
			<div className="sol-statistic-value">{value}</div>
			<div className="sol-statistic-label">{label}</div>
		</div>
	);
};
export default SolStatistic;
