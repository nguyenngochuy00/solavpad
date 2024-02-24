import SolModal from "../../../atoms/modal";
import SolItemCard from "../../../molecules/item-card";
import "./index.scss";

const SolBridgeSelectNetworkDialog = ({ show, networks = [], selectedNetwork, onSelect, onClose }) => {
    const handleSelect = () => {
        // todo
        onSelect();
    }
    return <SolModal show={show} className="sol-bridge-select-network-dialog" title="Select network" onClose={onClose}>
        {networks.length ? <div className="sol-networks">
            {
                networks.map((asset, index) => <SolItemCard
                    key={index}
                    type="button"
                    icon={<img src={asset.logo} alt={asset.name} />}
                    text={asset.name}
                    onClick={handleSelect}
                    disabled={asset.name === selectedNetwork.name}
                    rightIcon={asset.name === selectedNetwork.name ? <img src="/images/icons/selected.svg" alt="" /> : <></>}
                />)
            }
        </div> :
            <div className="sol-networks-empty">No asset found.</div>
        }
    </SolModal>
}
export default SolBridgeSelectNetworkDialog