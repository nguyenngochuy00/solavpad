import './index.scss';

const SolLaunchpadDetailTemplate = ({
	summary,
	poolCard,
	tabs,
	details
}) => {
	return (
		<div className="sol-launchpad-detail-template">
			{summary}
			{poolCard}
			<div className='sol-launchpad-detail-details'>
				{tabs}
				<div className='sol-launchpad-detail-tab-content'>
					{details}
				</div>
			</div>
		</div>
	);
};
export default SolLaunchpadDetailTemplate;
