// import SolInfo from 'src/components/molecules/info-block';
import SolButton from '../../../atoms/button';
import SolInfo from '../../../molecules/info-block';
import './index.scss';
// import SolButton from 'src/components/atoms/button';

type Props = {
	index?: any;
	value?: string | number;
	percent?: number;
	claimed?: string;
	time?: number;
	onClaim?: () => void;
};

const SolAllocationCard = ({
	index,
	value,
	percent,
	claimed,
	time,
	onClaim
}: any) => {
	return (
		<div className="sol-allocation-card">
			<div className="sol-allocation-card-info">
				<SolInfo label="Allocation" value={`${value} (${percent})`} />
				<SolInfo label="Claimed" value={claimed} />
				<div className="sol-allocation-card-action">
					{onClaim ? (
						<SolButton
							variant="primary"
							caption="Claim tokens"
							onClick={onClaim}
						/>
					) : (
						<></>
					)}
				</div>
			</div>
			<div className="sol-allocation-card-time">{time}</div>
			<span className="sol-allocation-card-index">#{index}</span>
		</div>
	);
};
export default SolAllocationCard;
