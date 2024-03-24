import './index.scss';

type Props = {
	size?: 'sm' | 'md' | 'lg';
	percent?: number | string;
};

const SolProgressBar = ({ size = 'md', percent = 0 }: Props) => {
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
