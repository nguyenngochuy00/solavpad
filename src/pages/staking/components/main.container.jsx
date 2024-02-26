import SolStakingTemplate from "src/components/templates/staking";
import SolStakingHeaderContainer from "./header.container";
import SolStakingPanelContainer from "./staking-panel.container";
import SolStakingYourInformationContainer from "./your-information.container";

const SolStakingMainContainer = () => {
    return <>
        <SolStakingTemplate
            header={<SolStakingHeaderContainer />}
            leftPanel={<SolStakingPanelContainer />}
            rightPanel={<SolStakingYourInformationContainer />}
        />
    </>
}
export default SolStakingMainContainer