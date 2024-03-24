import { Col, Row } from 'react-bootstrap';
import './index.scss';

interface SolStakingTemplateProps {
	header: JSX.Element;
	leftPanel: JSX.Element;
	rightPanel: JSX.Element;
}

const SolStakingTemplate = ({
	header,
	leftPanel,
	rightPanel
}: SolStakingTemplateProps) => {
	return (
		<div className="sol-staking-template">
			{header}
			<Row className="gy-4">
				<Col xl="8" className="order-2 order-xl-1">
					<div className="sol-staking-panel">{leftPanel}</div>
				</Col>
				<Col xl="4" className="order-1 order-xl-2">
					<div className="sol-staking-your-info">{rightPanel}</div>
				</Col>
			</Row>
		</div>
	);
};
export default SolStakingTemplate;
