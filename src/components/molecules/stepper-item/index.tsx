import './index.scss';

type SolStepperItemProps = {
	step: number;
	text: string;
	status: 'open' | 'completed' | 'disabled' | 'active' | '';
};

const SolStepperItem = ({
	step = 1,
	text = '',
	status = 'open'
}: SolStepperItemProps) => {
	return (
		<div className={`sol-stepper-item ${status}`}>
			<span className="sol-stepper-item-icon">{step}</span>
			<span className="sol-stepper-item-text">{text}</span>
		</div>
	);
};
export default SolStepperItem;
