import './index.scss';

const SolInfo = ({
	label = '',
	value = '',
	size = 'md'
}) => {
	return (
		<div className={`sol-info ${size}`}>
			<div className={`sol-info-label`}>{label}</div>
			<div className='sol-info-value'>{value}</div>
		</div>
	);
};
export default SolInfo;
