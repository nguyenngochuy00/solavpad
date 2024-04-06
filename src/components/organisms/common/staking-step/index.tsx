import './index.scss';

type Props = {
	className?: string;
	title?: string;
	description?: string | JSX.Element;
	children?: JSX.Element | JSX.Element[];
	confirm?: JSX.Element;
	isWarning?: boolean;
};

const SolStakingStep = ({
	className = '',
	title = '',
	description,
	children,
	confirm,
	isWarning = false
}: Props) => {
	return (
		<div className={`sol-staking-step ${className}`}>
			{isWarning ? <img className='mt-3' width={60} height={60} src={'/images/icons/warning.svg'} alt="" /> : <></>}

			<div className="sol-staking-step-title">{title}</div>
			<div className="sol-staking-step-description">{description}</div>
			<div className="sol-staking-step-body">{children}</div>
			{confirm ? (
				<div className="sol-staking-step-confirm">{confirm}</div>
			) : (
				<></>
			)}
		</div>
	);
};
export default SolStakingStep;
