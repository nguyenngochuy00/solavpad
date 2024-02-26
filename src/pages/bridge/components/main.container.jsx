import SolPageTitle from "src/components/molecules/page-title";
import SolBridgeImage from "src/components/organisms/bridge/bridge-image";
import SolBridgeTemplate from "src/components/templates/bridge";
import SolBridgeFormContainer from "./bridge-form.container";

const SolBridgeMainContainer = () => {
    return <>
        <SolBridgeTemplate
            header={<SolPageTitle>Solav Bridge</SolPageTitle>}
            leftPanel={<SolBridgeFormContainer />}
            rightPanel={<SolBridgeImage imageUrl="/images/bridge.png" />}
        />
    </>
}
export default SolBridgeMainContainer