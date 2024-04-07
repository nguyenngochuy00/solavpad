import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../../redux/rootReducer';
import SolButton from '../../../../atoms/button';
import SolStepperVertical from '../../../common/stepper-vertical';
import SolStakingWithdrawStep1 from './components/step-1';
import SolStakingWithdrawStep2 from './components/step-2';
import SolStakingWithdrawStep3 from './components/step-3';
import './index.scss';

interface SolStakingWithdrawProps {
	steps?: {
		step: number;
		text: string;
	}[];
	currentStep?: number;
	onPrev?: () => void;
	onNext?: () => void;
	onDone?: () => void;
	withdrawSymbol?: string;
	paymentSymbol?: string;
	paymentNetwork?: string;
	stakeable?: boolean;
	confirmedWithdraw?: boolean;
	stakeAmount: number;
	onConfirmWithdraw: (checked: boolean) => void;
	onStakeAmountChange?: (value: number) => void;
}

const SolStakingWithdraw: React.FC<SolStakingWithdrawProps> = ({
	steps,
	currentStep,
	paymentSymbol,
	withdrawSymbol,
	confirmedWithdraw,
	onConfirmWithdraw,
	onPrev,
	onNext,
	onDone
}: SolStakingWithdrawProps) => {

	const isValid = useSelector((state: AppState) => state.staking.isValidNext)

	return (
		<div className="sol-staking-withdraw">
			<Row>
				<Col lg="4">
					<SolStepperVertical steps={steps} currentStep={currentStep} />
				</Col>
				<Col lg="8">
					<div className="sol-staking-stake-content">
						<div className="sol-staking-stake-body">
							{currentStep === 1 ? (
								<SolStakingWithdrawStep1
									withdrawSymbol={withdrawSymbol}
									paymentSymbol={paymentSymbol}
									confirmedWithdraw={confirmedWithdraw}
									onConfirmWithdraw={onConfirmWithdraw}
								/>
							) : (
								<></>
							)}

							{currentStep === 2 ? <SolStakingWithdrawStep2 /> : <></>}

							{currentStep === 3 ? (
								<SolStakingWithdrawStep3 withdrawSymbol={withdrawSymbol} />
							) : (
								<></>
							)}
						</div>
						<div className="sol-staking-stake-action">
							{currentStep !== 3 ? (
								<>
									<SolButton
										onClick={onPrev}
										disabled={currentStep === 1}
										caption="Previous"
										icon={<img src="/images/icons/prev.svg" alt="" />}
									/>
									<SolButton
										onClick={onNext}
										disabled={!isValid}
										caption="Next"
										icon={<img src="/images/icons/next.svg" alt="" />}
										variant="primary"
									/>
								</>
							) : (
								<SolButton onClick={onDone} caption="Done" variant="primary" />
							)}
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};
export default SolStakingWithdraw;
