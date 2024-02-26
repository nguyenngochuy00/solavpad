import './index.scss';

const SolStakingStep = ({ className = '', title = '', description, children, confirm }) => {
	return (
		<div className={`sol-staking-step ${className}`}>
			<div className='sol-staking-step-title'>{title}</div>
			<div className='sol-staking-step-description'>{description}</div>
			<div className='sol-staking-step-body'>{children}</div>
			{confirm ? <div className='sol-staking-step-confirm'>{confirm}</div> : <></>}
		</div>
	);
};
export default SolStakingStep;
