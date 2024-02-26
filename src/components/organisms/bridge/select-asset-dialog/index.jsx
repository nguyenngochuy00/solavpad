import SolModal from "src/components/atoms/modal";
import SolItemCard from "src/components/molecules/item-card";
import "./index.scss";

const SolBridgeSelectAssetDialog = ({ show, assets = [], selectedAsset, keyword, onSearch, onSelect, onClose }) => {
    return <SolModal show={show} className="sol-bridge-select-asset-dialog" title="Select asset" onClose={onClose}>
        <div className="sol-search">
            <img src="/images/icons/search.svg" alt="" />
            <input type="search" placeholder="Search by token name" value={keyword} onChange={e => onSearch(e.target.value)} />
        </div>
        {assets.length ? <div className="sol-assets">
            {
                assets.map((asset, index) => <SolItemCard
                    key={index}
                    type="button"
                    icon={<img src={asset.logo} alt={asset.name} />}
                    text={asset.name}
                    onClick={() => onSelect(asset)}
                    disabled={asset.name === selectedAsset?.name}
                    rightIcon={asset.name === selectedAsset?.name ? <img src="/images/icons/selected.svg" alt="" /> : <></>}
                />)
            }
        </div> :
            <div className="sol-assets-empty">No asset found.</div>
        }
    </SolModal>
}
export default SolBridgeSelectAssetDialog