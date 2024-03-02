import SolModal from 'src/components/atoms/modal';
import SolItemCard from 'src/components/molecules/item-card';
import './index.scss';

const SolConnectWalletDialog = ({
	show,
	extensions = [],
	onClose,
	onSelect
}) => {
	return (
		<SolModal
			show={show}
			className="sol-connect-wallet-dialog"
			title="Connect wallet"
			onClose={onClose}
		>
			{extensions.length ? (
				<div className="sol-extensions">
					{extensions.map((asset, index) => (
						<SolItemCard
							key={index}
							type="button"
							icon={<img src={asset.logo} alt={asset.name} />}
							text={asset.name}
							onClick={onSelect}
						/>
					))}
				</div>
			) : (
				<div className="sol-extensions-empty">No extensions found.</div>
			)}

			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a href="#" className="sol-wallet-help">
				<img src="/images/help-icon.svg" alt="" />
				<span>Learn how to connect</span>
			</a>
		</SolModal>
	);
};
export default SolConnectWalletDialog;
