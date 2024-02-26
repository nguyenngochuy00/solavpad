import SolStatistic from "src/components/molecules/statistic";
import "./index.scss";

const SolStakingStatistics = ({ statistics = [] }) => {
    return statistics.length ? <div className="sol-staking-statistics">
        {statistics.map((statistic, index) => (
            <SolStatistic
                key={index}
                label={statistic.label}
                value={statistic.value}
            />
        ))}
    </div> : <></>
}
export default SolStakingStatistics