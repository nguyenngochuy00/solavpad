import { Col, Row } from 'react-bootstrap';
import SolStepperVertical from '../../../common/stepper-vertical';
// import SolStepperVertical from "src/components/organisms/common/stepper-vertical";
import SolStakingUnstakeStep1 from './components/step-1';
import SolStakingUnstakeStep2 from './components/step-2';
import SolStakingUnstakeStep3 from './components/step-3';
import SolStakingUnstakeStep4 from './components/step-4';
import SolStakingUnstakeStep5 from './components/step-5';
import './index.scss';

const SolStakingUnstake = () => {
	return (
		<div className="sol-staking-unstake">
			<Row>
				<Col lg="4">
					<SolStepperVertical />
				</Col>
				<Col lg="8">
					<SolStakingUnstakeStep1 />
					<SolStakingUnstakeStep2 />
					<SolStakingUnstakeStep3 />
					<SolStakingUnstakeStep4 />
					<SolStakingUnstakeStep5 />
				</Col>
			</Row>
		</div>
	);
};
export default SolStakingUnstake;
