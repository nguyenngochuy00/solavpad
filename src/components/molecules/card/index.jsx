import './index.scss';

const SolCard = ({ title = '', action = '', children, onAction }) => {
	return (
		<div className="sol-card">
			<div className="sol-card-header">
				<h2 className="sol-card-title">{title}</h2>
				{action && (
					<span className="sol-card-action" onClick={onAction}>
						{action}
					</span>
				)}
			</div>
			<div className="sol-card-content">
				<div className="sol-card-body">{children}</div>
			</div>
		</div>
	);
};
export default SolCard;
