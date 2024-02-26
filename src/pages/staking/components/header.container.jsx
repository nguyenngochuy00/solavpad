import SolPageTitle from "src/components/molecules/page-title";
import SolStakingStatistics from "src/components/organisms/staking/statistics";

const SolStakingHeaderContainer = () => {
    const STATISTICS = [
        { label: 'Number of Stakers', value: '10,729' },
        { label: 'Total BSCPAD Staked', value: '101,443,068.02' },
        { label: 'APY', value: '15.00%' },
    ]
    
    return <>
        <SolPageTitle>Solav Staking</SolPageTitle>
        <SolStakingStatistics statistics={STATISTICS} />
    </>
}
export default SolStakingHeaderContainer