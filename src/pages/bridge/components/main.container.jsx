import SolPageTitle from "../../../components/molecules/page-title";
import SolBridgeImage from "../../../components/organisms/bridge/bridge-image";
import SolBridgeTemplate from "../../../components/templates/bridge";
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