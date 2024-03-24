// import SolStepperItem from 'src/components/molecules/stepper-item';
import SolStepperItem from '../../../molecules/stepper-item';
import './index.scss';

type Step = { step: number; text: string };

type SolStepperVerticalProps = { steps?: Step[]; currentStep?: number };

const SolStepperVertical = ({
	steps = [],
	currentStep = 1
}: SolStepperVerticalProps) => {
	return (
		<div className="sol-stepper-vertical">
			{steps.map((step, index) => (
				<SolStepperItem
					key={index}
					step={step.step}
					text={step.text}
					status={
						step.step === currentStep
							? 'active'
							: step.step < currentStep
							? 'completed'
							: step.step > currentStep
							? 'disabled'
							: ''
					}
				/>
			))}
		</div>
	);
};
export default SolStepperVertical;
