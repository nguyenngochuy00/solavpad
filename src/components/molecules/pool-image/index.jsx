import './index.scss';

const SolPoolImage = ({ src = '', networkIcon, networkName = '', onClick }) => {
	return (
		<div className="sol-pool-image" onClick={onClick}>
			<img src={src} alt="Pool" className="sol-pool-image-src" />
			<div className="sol-pool-network-info">
				{networkIcon && (
					<img
						src={networkIcon}
						alt="Network"
						className="sol-pool-network-icon"
					/>
				)}
				<span className="sol-pool-network-name">
					{networkName} <span>network</span>
				</span>
			</div>
		</div>
	);
};

export default SolPoolImage;
