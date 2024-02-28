import SolLaunchpadDetailTokenMetrics from "src/components/organisms/launchpad-detail/token-metrics"

const SolLaunchpadDetailTekenMetricsContainer = () => {
    const DATA = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    '#e250e5',
                    '#8350e6',
                    '#4b50e6',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderColor: [
                    'rgba(255, 255, 255, 0.1)',
                    'rgba(255, 255, 255, 0.1)',
                    'rgba(255, 255, 255, 0.1)',
                    'rgba(255, 255, 255, 0.1)',
                    'rgba(255, 255, 255, 0.1)',
                    'rgba(255, 255, 255, 0.1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    return <SolLaunchpadDetailTokenMetrics
        data={DATA}
    />
}
export default SolLaunchpadDetailTekenMetricsContainer