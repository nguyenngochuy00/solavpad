import { useState } from "react";
import SolModal from "../../../atoms/modal";
import SolItemCard from "../../../molecules/item-card";
import "./index.scss";

const SolBridgeSelectAssetDialog = ({ show, assets = [], selectedAsset, onSearch, onSelect, onClose }) => {
    const [keyword, setKeyword] = useState('');

    const handleKeywordChange = (e) => {
        const newKeyword = e.target.value;
        setKeyword(newKeyword);
        onSearch(newKeyword);
    }

    const handleSelect = () => {
        // todo
        onSelect();
    }

    return <SolModal show={show} className="sol-bridge-select-asset-dialog" title="Select asset" onClose={onClose}>
        <div className="sol-search">
            <img src="/images/icons/search.svg" alt="" />
            <input type="search" placeholder="Search by token name" value={keyword} onChange={handleKeywordChange} />
        </div>
        {assets.length ? <div className="sol-assets">
            {
                assets.map((asset, index) => <SolItemCard
                    key={index}
                    type="button"
                    icon={<img src={asset.logo} alt={asset.name} />}
                    text={asset.name}
                    onClick={handleSelect}
                    disabled={asset.name === selectedAsset.name}
                    rightIcon={asset.name === selectedAsset.name ? <img src="/images/icons/selected.svg" alt="" /> : <></>}
                />)
            }
        </div> :
            <div className="sol-assets-empty">No asset found.</div>
        }
    </SolModal>
}
export default SolBridgeSelectAssetDialog