import SolLaunchpadDetailTokenMetrics from "src/components/organisms/launchpad-detail/token-metrics"

const SolLaunchpadDetailTekenMetricsContainer = ({ data }) => {
    const OPTIONS = {
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    color: 'white'
                }
            }
        }
    }
    return <SolLaunchpadDetailTokenMetrics data={data} chartOptions={OPTIONS} />
}
export default SolLaunchpadDetailTekenMetricsContainer