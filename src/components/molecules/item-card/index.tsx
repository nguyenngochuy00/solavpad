import './index.scss';

type SolItemCardProps = {
	type?: 'button';
	disabled?: boolean;
	icon?: JSX.Element;
	text?: string;
	rightIcon?: JSX.Element;
	onClick?: any;
};

const SolItemCard: React.FC<SolItemCardProps> = ({
	type = 'button',
	disabled,
	icon,
	text,
	rightIcon,
	onClick
}: SolItemCardProps) => {
	return (
		<button
			type="button"
			className="sol-item-card"
			disabled={disabled}
			onClick={onClick}
		>
			{icon ? <span className="sol-item-card-icon">{icon}</span> : <></>}
			<span className="sol-item-card-text">{text}</span>
			{rightIcon ? (
				<span className="sol-item-card-right-icon">{rightIcon}</span>
			) : (
				<></>
			)}
		</button>
	);
};
export default SolItemCard;
