import './index.scss';

type SolCardProps = {
	className?: string;
	title: string;
	action?: string;
	children: JSX.Element;
	onAction?: () => void;
};

const SolCard: React.FC<SolCardProps> = ({
	className = '',
	title = '',
	action = '',
	children,
	onAction
}: SolCardProps) => {
	return (
		<div className={`sol-card ${className}`}>
			<div className="sol-card-header">
				<h2 className="sol-card-title">{title}</h2>
				{action && (
					<span className="sol-card-action" onClick={onAction}>
						{action}
					</span>
				)}
			</div>
			<div className="sol-card-body">{children}</div>
		</div>
	);
};
export default SolCard;
