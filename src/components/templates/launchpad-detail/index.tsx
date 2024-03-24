import './index.scss';

type SolLaunchpadDetailTemplateProps = {
	summary: JSX.Element;
	poolCard: JSX.Element;
	tabs: JSX.Element;
	details: JSX.Element;
};

const SolLaunchpadDetailTemplate: React.FC<SolLaunchpadDetailTemplateProps> = ({
	summary,
	poolCard,
	tabs,
	details
}: SolLaunchpadDetailTemplateProps) => {
	return (
		<div className="sol-launchpad-detail-template">
			{summary}
			{poolCard}
			<div className="sol-launchpad-detail-details">
				{tabs}
				<div className="sol-launchpad-detail-tab-content">{details}</div>
			</div>
		</div>
	);
};
export default SolLaunchpadDetailTemplate;
