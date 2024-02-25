import './index.scss';

const SolButton = ({
	className = '',
	variant = 'outline',
	size = 'medium',
	icon,
	disabled = false,
	caption = '',
	onClick
}) => {
	return (
		<button
			type="button"
			disabled={disabled}
			onClick={onClick}
			className={`sol-btn sol-btn-${variant} sol-btn-${size} ${className}`}
		>
			{icon ? <span className="sol-icon">{icon}</span> : <></>}
			<span>{caption}</span>
		</button>
	);
};
export default SolButton;
