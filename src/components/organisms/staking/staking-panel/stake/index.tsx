import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../../redux/rootReducer';
import { WalletInfo } from '../../../../../types/ido.type';
import SolButton from '../../../../atoms/button';
import SolStepperVertical from '../../../common/stepper-vertical';
import SolStakingStakeStep1 from './components/step-1';
import SolStakingStakeStep2 from './components/step-2';
import SolStakingStakeStep4 from './components/step-4';
import SolStakingStakeStep5 from './components/step-5';
import './index.scss';

interface SolStakingStakeProps {
	steps?: {
		step: number;
		text: string;
	}[];
	currentStep?: number;
	walletInfo?: WalletInfo;
	stakingSymbol?: string;
	paymentBalance?: number;
	paymentSymbol?: string;
	paymentNetwork?: string;
	stakeable?: boolean;
	confirmedStake?: boolean;
	stakeAmount?: number;
	stakeLoadingPercent?: number;
	onConfirmStake?: any;
	onStakeAmountChange?: (value: number) => void;
	onPrev?: () => void;
	onNext?: () => void;
	onDone?: () => void;
}

const SolStakingStake = ({
	steps,
	currentStep,
	walletInfo,
	stakingSymbol,
	paymentBalance,
	paymentSymbol,
	paymentNetwork,
	stakeable,
	confirmedStake,
	stakeAmount,
	stakeLoadingPercent,
	onConfirmStake,
	onStakeAmountChange,
	onPrev,
	onNext,
	onDone
}: SolStakingStakeProps) => {
	const isValid = useSelector((state: AppState) => state.staking.isValidNext)

	return (
		<div className="sol-staking-stake">
			<Row>
				<Col lg="4">
					<SolStepperVertical steps={steps} currentStep={currentStep} />
				</Col>
				<Col lg="8">
					<div className="sol-staking-stake-content">
						<div className="sol-staking-stake-body">
							{currentStep === 1 ? (
								<SolStakingStakeStep1
									walletInfo={walletInfo}
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
							{currentStep === 2 ? (
								<SolStakingStakeStep2
									stakeAmount={stakeAmount}
									stakingSymbol={stakingSymbol}
									onStakeAmountChange={onStakeAmountChange}
								/>
							) : (
								<></>
							)}
							{/* {currentStep === 3 ? (
								<SolStakingStakeStep3
									stakeAmount={stakeAmount}
									stakingSymbol={stakingSymbol}
									stakeLoadingPercent={stakeLoadingPercent}
								/>
							) : (
								<></>
							)} */}
							{currentStep === 3 ? (
								<SolStakingStakeStep4 stakingSymbol={stakingSymbol} />
							) : (
								<></>
							)}
							{currentStep === 4 ? (
								<SolStakingStakeStep5 stakingSymbol={stakingSymbol} />
							) : (
								<></>
							)}
						</div>
						<div className="sol-staking-stake-action">
							{currentStep !== 4 ? (
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
export default SolStakingStake;
