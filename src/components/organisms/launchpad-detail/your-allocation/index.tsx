import { Key } from 'react';
import { Col, Row } from 'react-bootstrap';
import {
	formatNumberDownRound,
	formatTokenAllocation
} from '../../../../services/helpers';
import { AllocationItem } from '../../../../types/ido.type';
import SolAllocationCard from '../../common/allocation-card';
import './index.scss';

interface SolLaunchpadDetailAllocationProps {
	tokenDecimals: number;
	allocations: Array<AllocationItem>;
	layout: number;
	onClaim: (index: number) => void;
}

const SolLaunchpadDetailAllocation = ({
	allocations,
	tokenDecimals,
	layout,
	onClaim
}: SolLaunchpadDetailAllocationProps) => {
	return (
		<div className="sol-launchpad-detail-allocation">
			{layout == 1 && allocations.length > 0 && (
				<Row>
					{allocations.map(
						(allocation: AllocationItem, index: Key | null | undefined) => (
							<Col lg="6" key={index}>
								<SolAllocationCard
									index={allocation.no}
									value={formatNumberDownRound(
										Number(allocation?.allocationAmount) | 0,
										tokenDecimals
									)}
									percent={Number(allocation.percentage) / 100}
									claimed={formatNumberDownRound(
										Number(allocation?.claimedAmount) | 0,
										tokenDecimals
									)}
									time={Number(allocation.timestamp)}
									onClaim={() => onClaim(Number(allocation.no))}
									status={allocation.status}
									layout={layout}
								/>
							</Col>
						)
					)}
				</Row>
			)}
			{layout == 2 && allocations.length > 0 && (
				<Row>
					{allocations.map(
						(allocation: AllocationItem, index: Key | null | undefined) => (
							<Col lg="6" key={index}>
								<SolAllocationCard
									index={allocation.no}
									value={formatTokenAllocation(
										allocation.allocationAmount,
										tokenDecimals
									)}
									percent={Number(allocation.percentage) / 100}
									claimed={formatNumberDownRound(
										Number(allocation?.claimedAmount) | 0,
										tokenDecimals
									)}
									time={allocation.timestamp}
									onClaim={() => onClaim(Number(allocation.no))}
									status={allocation.status}
									layout={layout}
								/>
							</Col>
						)
					)}
				</Row>
			)}
		</div>
	);
};
export default SolLaunchpadDetailAllocation;
