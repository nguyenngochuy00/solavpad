import { Col, Row } from 'react-bootstrap';
import { WalletInfo } from '../../../../../types/ido.type';
import SolButton from '../../../../atoms/button';
import SolStepperVertical from '../../../common/stepper-vertical';
// import SolStepperVertical from "src/components/organisms/common/stepper-vertical";
import SolStakingUnstakeStep1 from './components/step-1';
import SolStakingUnstakeStep2 from './components/step-2';
import SolStakingUnstakeStep3 from './components/step-3';
import SolStakingUnstakeStep4 from './components/step-4';
import SolStakingUnstakeStep5 from './components/step-5';
import './index.scss';

interface SolStakingUnstakeProps {
	steps?: {
		step: number;
		text: string;
	}[];
	currentStep?: number;
	isValid?: boolean;
	onPrev?: () => void;
	onNext?: () => void;
	onDone?: () => void;

	stakingSymbol?: string;
	paymentSymbol?: string;
	paymentNetwork?: string;
	stakeable?: boolean;
	confirmedStake?: boolean;
	stakeAmount: number;
	onConfirmStake: (checked: boolean) => void;
	onStakeAmountChange?: (value: number) => void;
}

const SolStakingUnstake = ({
	steps,
	currentStep,
	onPrev,
	onDone,
	onNext,
	isValid,
	stakingSymbol = '',
	paymentSymbol = '',
	paymentNetwork = '',
	stakeable = false,
	confirmedStake,
	stakeAmount,
	onStakeAmountChange,
	onConfirmStake
}: SolStakingUnstakeProps) => {
	return (
		<div className="sol-staking-unstake">
			<Row>
				<Col lg="4">
					<SolStepperVertical steps={steps} currentStep={currentStep} />
				</Col>
				<Col lg="8">
					<div className="sol-staking-stake-content">
						<div className="sol-staking-stake-body">
							{currentStep === 1 ? <SolStakingUnstakeStep1 /> : <></>}
							{currentStep === 2 ? (
								<SolStakingUnstakeStep2
									stakingSymbol={stakingSymbol}
									paymentSymbol={paymentSymbol}
									paymentNetwork={paymentNetwork}
									stakeable={stakeable}
									confirmedStake={confirmedStake}
									onConfirmStake={onConfirmStake}
								/>
							) : (
								<></>
							)}
							{currentStep === 3 ? (
								<SolStakingUnstakeStep3
									stakeAmount={stakeAmount}
									stakingSymbol={stakingSymbol}
									onStakeAmountChange={onStakeAmountChange}
								/>
							) : (
								<></>
							)}
							{currentStep === 4 ? <SolStakingUnstakeStep4 /> : <></>}
							{currentStep === 5 ? <SolStakingUnstakeStep5 stakingSymbol={stakingSymbol}/> : <></>}
						</div>

						<div className="sol-staking-stake-action">
							{currentStep !== 5 ? (
								<>
									<SolButton
										onClick={onPrev}
										disabled={currentStep === 1}
										caption="Previous"
										icon={<img src="/images/icons/prev.svg" alt="" />}
									/>

									<SolButton
										onClick={onNext}
										// disabled={!isValid}
										caption="Next"
										className="icon-right"
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
export default SolStakingUnstake;
