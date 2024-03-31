// import SolInfo from 'src/components/molecules/info-block';
import moment from 'moment';
import SolButton from '../../../atoms/button';
import SolInfo from '../../../molecules/info-block';
import './index.scss';
import { formatTimeStampAllocation } from '../../../../services/helpers';
// import SolButton from 'src/components/atoms/button';

type SolAllocationCardProps = {
	index: any;
	value: string | number;
	percent: number | string;
	claimed: string | number;
	time: number | string;
	status: string | number;
	layout: number;
	onClaim: () => void;
};

const SolAllocationCard = ({
	index,
	value,
	percent,
	claimed,
	time,
	status,
	layout,
	onClaim
}: SolAllocationCardProps) => {
	return (
		<div className="sol-allocation-card">
			<div className="sol-allocation-card-info">
				<SolInfo label="Allocation" value={`${value} (${percent}%)`} />
				<SolInfo label="Claimed" value={claimed} />
				<div className="sol-allocation-card-action">
					{onClaim ? (
						<SolButton
							variant="primary"
							caption="Claim tokens"
							onClick={onClaim}
							disabled={status !== "OPEN"}
						/>
					) : (
						<></>
					)}
				</div>
			</div>
			{layout === 1 && (
				<div className="sol-allocation-card-time">{Number(time) !== 0  ? moment.unix(Number(time)).utc().format('YYYY-MM-DD HH:mm:ss UTC') : "DEX Listing" }</div>
			)}
			{layout === 2 && (
				<div className="sol-allocation-card-time">
					{ Number(time) !== 0 ?(<div dangerouslySetInnerHTML={{ __html: formatTimeStampAllocation(time)}}></div>):"DEX Listing" }		
				</div>
			)}
			<span className="sol-allocation-card-index">#{index}</span>
		</div>
	);
};
export default SolAllocationCard;
