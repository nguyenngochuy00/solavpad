import './index.scss';

const SolProgressBar = ({ size = 'medium', percent = 0 }) => {
	return (
		<div className={`sol-progress-bar sol-progress-bar-${size}`}>
			<div
				className="sol-progress-bar-inner"
				style={{ width: `${percent}%` }}
			></div>
		</div>
	);
};
export default SolProgressBar;
