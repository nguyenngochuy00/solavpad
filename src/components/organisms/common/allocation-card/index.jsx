import SolInfo from "src/components/molecules/info-block";
import "./index.scss";
import SolButton from "src/components/atoms/button";

const SolAllocationCard = ({ index, value, percent, claimed, time, onClaim }) => {
    return <div className="sol-allocation-card">
        <div className="sol-allocation-card-info">
            <SolInfo label="Allocation" value={`${value} (${percent})`} />
            <SolInfo label="Claimed" value={claimed} />
            <div className="sol-allocation-card-action">
                {onClaim ? <SolButton variant="primary" caption="Claim tokens" onClick={onClaim} /> : <></>}
            </div>
        </div>
        <div className="sol-allocation-card-time">{time}</div>
        <span className="sol-allocation-card-index">#{index}</span>
    </div>
}
export default SolAllocationCard