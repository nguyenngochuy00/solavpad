import SolLaunchpadBanner from "src/components/organisms/launchpad/banner"

const SolLaunchpadBannerContainer = () => {
    return <SolLaunchpadBanner
        title={<>Welcome to <br /> The Solav Launchpad</>}
        description="Solav Launchpad is your ticket to diversify your DeFi investment portfolio & access the best crypto projects."
        statistics={
            [
                { label: 'Completed Launchpads', value: 100 },
                { label: 'Opening Launchpads', value: 1 },
                { label: 'Upcoming Launchpads', value: 2 },
                { label: 'Fund Raised ($)', value: '900M+' }
            ]
        }
        image="/images/images/banner.png"
    />
}
export default SolLaunchpadBannerContainer