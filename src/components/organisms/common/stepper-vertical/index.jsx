import SolStepperItem from "src/components/molecules/stepper-item";
import "./index.scss";

const SolStepperVertical = ({ steps = [], currentStep = 1 }) => {
    return <div className="sol-stepper-vertical">
        {
            steps.map((step, index) => <SolStepperItem
                key={index}
                step={step.step}
                text={step.text}
                status={step.step === currentStep ? 'active' : step.step < currentStep ? 'completed' : ''}
            />)
        }
    </div>
}
export default SolStepperVertical