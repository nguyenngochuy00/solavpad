import './index.scss';

type Props = {
	className?: string;
	variant?: 'outline' | 'solid' | 'primary';
	size?: 'sm' | 'md' | 'lg';
	icon?: JSX.Element;
	disabled?: boolean;
	caption?: string;
	type?: 'button' | 'submit';
	onClick?: () => void;
};

const SolButton = ({
	className = '',
	variant = 'outline',
	size = 'md',
	icon,
	disabled = false,
	caption = '',
	type = 'button',
	onClick
}: Props) => {
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
