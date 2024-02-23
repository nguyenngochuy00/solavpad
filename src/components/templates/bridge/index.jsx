import { Col, Row } from "react-bootstrap";
import SolPageTitle from "../../molecules/page-title";
import SolBridgeForm from "../../organisms/bridge/bridge-form";
import SolBridgeImage from "../../organisms/bridge/bridge-image";
import SolBridgeProcessDialog from "../../organisms/bridge/bridge-process-dialog";
import SolBridgeSelectAssetDialog from "../../organisms/bridge/select-asset-dialog";
import SolBridgeSelectNetworkDialog from "../../organisms/bridge/select-network-dialog";
import "./index.scss";

const SolBridgeTemplate = () => {
    return <div className="sol-bridge-template">
        <SolPageTitle>Solav Bridge</SolPageTitle>
        <Row>
            <Col lg="6">
                <SolBridgeForm />
            </Col>
            <Col lg="6">
                <SolBridgeImage />
            </Col>
        </Row>
        <SolBridgeSelectAssetDialog />
        <SolBridgeSelectNetworkDialog />
        <SolBridgeProcessDialog />
    </div>
}
export default SolBridgeTemplate