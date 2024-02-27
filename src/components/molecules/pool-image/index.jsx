import './index.scss';

const SolPoolImage = ({
	src = '',
	styleImg = 'small',
	networkIcon,
	networkName = '',
	onClick,
	styleNetwork = 'right',
	styleIcon = 'small',
	styleName = 'small'
}) => {
	return (
		<div className="sol-pool-image" onClick={onClick}>
			<img
				src={src}
				alt="Pool1"
				className={`sol-pool-image-src sol-pool-image-src-${styleImg}`}
			/>
			<div
				className={`sol-pool-network-info sol-pool-network-info-${styleNetwork}`}
			>
				{networkIcon && (
					<img
						src={networkIcon}
						alt="Network"
						className={`sol-pool-network-icon sol-pool-network-icon-${styleIcon}`}
					/>
				)}
				<span
					className={`sol-pool-network-name sol-pool-network-name-${styleName}`}
				>
					{networkName} <span>network</span>
				</span>
			</div>
		</div>
	);
};

export default SolPoolImage;
