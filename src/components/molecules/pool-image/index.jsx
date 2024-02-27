import './index.scss';

const SolPoolImage = ({
	type = 'type-1',
	src = '',
	networkIcon,
	networkName = '',
	onClick,
}) => {
	return (
		<div className={`sol-pool-image ${type}`} onClick={onClick}>
			<img src={src} alt="" />
			{networkName ? <div className='sol-network'>
				{networkIcon && (
					<span className='sol-network-icon'><img src={networkIcon} alt="" /></span>
				)}
				<span><b>{networkName}</b> network</span>
			</div> : <></>
			}
		</div>
	);
};

export default SolPoolImage;
