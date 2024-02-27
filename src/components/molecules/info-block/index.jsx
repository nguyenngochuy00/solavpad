import './index.scss';

const SolInfo = ({
	label = '',
	value = '',
	value2 = '',
	size = 'md'
}) => {
	return (
		<div className={`sol-info ${size}`}>
			<div className={`sol-info-label`}>{label}</div>
			<div className='sol-info-value'>
				{value}
				{value2 ? <div>{value2}</div> : <></>}
			</div>
		</div>
	);
};
export default SolInfo;
