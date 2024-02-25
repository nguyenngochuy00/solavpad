import './index.scss';

const SolInfo = ({ label = '', value = '' }) => {
	return (
		<div className="sol-info">
			<div className="sol-info-inner">
				<div className="sol-info-label">{label}</div>
				<div className="sol-info-value">{value}</div>
			</div>
		</div>
	);
};
export default SolInfo;
