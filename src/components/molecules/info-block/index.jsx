import './index.scss';

const SolInfo = ({
	label = '',
	value = '',
	styleLabel = 'sm',
	styleValue = 'sm'
}) => {
	return (
		<div className="sol-info">
			<div className={`sol-info-label sol-info-label-${styleLabel}`}>
				{label}
			</div>
			<div className={`sol-info-value sol-info-value-${styleValue}`}>
				{value}
			</div>
		</div>
	);
};
export default SolInfo;
