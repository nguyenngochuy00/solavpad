import './index.scss';

const SolButton = ({
	className = '',
	variant = 'outline',
	size = 'medium',
	icon,
	disabled = false,
	caption = '',
	type='button',
	onClick
}) => {
	return (
		<button
			type={type}
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
