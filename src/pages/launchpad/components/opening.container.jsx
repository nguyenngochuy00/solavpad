import SolLaunchpadOpening from "src/components/organisms/launchpad/opening-launchpads";
import { APP_ROUTES } from "src/constants";

const SolLaunchpadOpeningContainer = () => {
    return <SolLaunchpadOpening
        sectionTitle="Opening Launchpads"
        projectData={{
            routeUrl: `/${APP_ROUTES.LAUNCHPAD_DETAIL.path.replace(':id', 1)}`,
            logo: "/images/images/FOTA_2.png",
            name: 'Fight of the Ages (Blue Diamond Private)',
            description: 'Fight of the Ages is fantasy Triple-A MOBA game project.',
            networkIcon: "/images/images/Solana_logo_1.png",
            networkName: "SOLANA",
            swapRate: "1 BUSD = 6.666666 FOTA",
            cap: "13,000 USDB",
            accessType: "Private",
            progressPercent: 70,
            participants: 10,
            telegram: "/images/icons/telegram.svg",
            twitter: "/images/icons/twitter.svg",
            webURL: "/images/icons/webURL.svg"
        }}

    />
}
export default SolLaunchpadOpeningContainer