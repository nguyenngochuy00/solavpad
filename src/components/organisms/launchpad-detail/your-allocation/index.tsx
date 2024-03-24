import { Col, Row } from 'react-bootstrap';
import './index.scss';
import SolAllocationCard from '../../common/allocation-card';
import { Key } from 'react';

interface SolLaunchpadDetailAllocationProps {
	allocations?: any;
	onClaim?: () => void;
}

const SolLaunchpadDetailAllocation = ({ allocations, onClaim }: any) => {
	return (
		<div className="sol-launchpad-detail-allocation">
			<Row>
				{allocations.map(
					(
						allocation: {
							value: string | number | undefined;
							percent: number | undefined;
							claimed: string | undefined;
							time: number | undefined;
						},
						index: Key | null | undefined
					) => (
						<Col lg="6" key={index}>
							<SolAllocationCard
								// index={index + 1}
								value={allocation.value}
								percent={allocation.percent}
								claimed={allocation.claimed}
								time={allocation.time}
								onClaim={onClaim ? () => onClaim(allocation, index) : null}
							/>
						</Col>
					)
				)}
			</Row>
		</div>
	);
};
export default SolLaunchpadDetailAllocation;
