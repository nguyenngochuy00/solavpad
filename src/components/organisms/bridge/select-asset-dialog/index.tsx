import { NetworkType } from '../../../../types';
import SolModal from '../../../atoms/modal';
import SolItemCard from '../../../molecules/item-card';
import './index.scss';

type SolBridgeSelectAssetDialogProps = {
	show?: boolean;
	assets?: NetworkType[];
	selectedAsset?: NetworkType | undefined;
	keyword?: string;
	onSearch: (keyword: string) => void;
	onSelect: (asset: NetworkType) => void;
	onClose?: () => void;
};

const SolBridgeSelectAssetDialog = ({
	show,
	assets = [],
	selectedAsset,
	keyword,
	onSearch,
	onSelect,
	onClose
}: SolBridgeSelectAssetDialogProps) => {
	return (
		<SolModal
			show={show}
			className="sol-bridge-select-asset-dialog"
			title="Select asset"
			onClose={onClose}
		>
			<div className="sol-search">
				<img src="/images/icons/search.svg" alt="" />
				<input
					type="search"
					placeholder="Search by token name"
					value={keyword}
					onChange={e => onSearch(e.target.value)}
				/>
			</div>
			{assets.length ? (
				<div className="sol-assets">
					{assets.map((asset: any, index: any) => (
						<SolItemCard
							key={index}
							type="button"
							icon={<img src={asset.logo} alt={asset.name} />}
							text={asset.name}
							onClick={() => onSelect(asset)}
							disabled={asset.name === selectedAsset?.name}
							rightIcon={
								asset.name === selectedAsset?.name ? (
									<img src="/images/icons/selected.svg" alt="" />
								) : (
									<></>
								)
							}
						/>
					))}
				</div>
			) : (
				<div className="sol-assets-empty">No asset found.</div>
			)}
		</SolModal>
	);
};
export default SolBridgeSelectAssetDialog;
