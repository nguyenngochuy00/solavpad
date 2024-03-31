import { Col, Row } from 'react-bootstrap';
import './index.scss';
import SolAllocationCard from '../../common/allocation-card';
import { Key } from 'react';
import { AllocationItem } from '../../../../types/ido.type';
import { formatNumberDownRound } from '../../../../services/helpers';
import moment from 'moment';

interface SolLaunchpadDetailAllocationProps {
	tokenDecimals: number;
	allocations: Array<AllocationItem>;
	layout: number;
	onClaim: (index: number) => void;
}

const SolLaunchpadDetailAllocation = ({ allocations, tokenDecimals, layout, onClaim }: SolLaunchpadDetailAllocationProps) => {
	return (
		<div className="sol-launchpad-detail-allocation">
			{layout == 1 && allocations.length > 0 &&
				<Row>

					{allocations.map(
						(
							allocation: AllocationItem,
							index: Key | null | undefined
						) => (
							<Col lg="6" key={index}>
								<SolAllocationCard
									index={allocation.no}
									value={formatNumberDownRound(allocation.allocationAmount, tokenDecimals)}
									percent={Number(allocation.percentage) / 100}
									claimed={formatNumberDownRound(allocation.claimedAmount, tokenDecimals)}
									time={Number(allocation.timestamp) !== 0  ? moment.unix(Number(allocation.timestamp)).utc().format('YYYY-MM-DD HH:mm:ss UTC') : "DEX Listing" }
									onClaim={() => onClaim(Number(allocation.no))}
									status={allocation.status}
									layout={layout}
								/>
							</Col>
						)
					)}
				</Row>
			}
			{layout == 2 && allocations.length > 0 &&
				<Row>

					{allocations.map(
						(
							allocation: AllocationItem,
							index: Key | null | undefined
						) => (
							<Col lg="6" key={index}>
								<SolAllocationCard
									index={allocation.no}
									value={formatNumberDownRound(allocation.allocationAmount, tokenDecimals)}
									percent={Number(allocation.percentage) / 100}
									claimed={formatNumberDownRound(allocation.claimedAmount, tokenDecimals)}
									time={allocation.timestamp}
									onClaim={() => onClaim(Number(allocation.no))}
									status={allocation.status}
									layout={layout}
								/>
							</Col>
						)
					)}
				</Row>
			}

		</div>
	);
};
export default SolLaunchpadDetailAllocation;
