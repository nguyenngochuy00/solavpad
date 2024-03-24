import { NetworkType } from '../../../../types';
import SolModal from '../../../atoms/modal';
import SolItemCard from '../../../molecules/item-card';
import './index.scss';

type SolBridgeSelectNetworkDialogProps = {
	show?: boolean;
	networks?: NetworkType[];
	selectedNetwork?: NetworkType | undefined;
	onSelect: any;
	onClose?: () => void;
};

const SolBridgeSelectNetworkDialog = ({
	show,
	networks = [],
	selectedNetwork,
	onSelect,
	onClose
}: SolBridgeSelectNetworkDialogProps) => {
	console.log(selectedNetwork);
	return (
		<SolModal
			show={show}
			className="sol-bridge-select-network-dialog"
			title="Select network"
			onClose={onClose}
		>
			{networks.length ? (
				<div className="sol-networks">
					{networks.map((network, index) => (
						<SolItemCard
							key={index}
							type="button"
							icon={<img src={network.logo} alt={network.name} />}
							text={network.name}
							onClick={() => onSelect(network)}
							disabled={network.name === selectedNetwork?.name}
							rightIcon={
								network.name === selectedNetwork?.name ? (
									<img src="/images/icons/selected.svg" alt="" />
								) : (
									<></>
								)
							}
						/>
					))}
				</div>
			) : (
				<div className="sol-networks-empty">No network found.</div>
			)}
		</SolModal>
	);
};
export default SolBridgeSelectNetworkDialog;
