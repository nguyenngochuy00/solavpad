// import SolButton from 'src/components/atoms/button';
// import SolFormGroup from 'src/components/molecules/form-group';
// import SolInputAmount from 'src/components/molecules/input-amount';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import SolButton from '../../../atoms/button';
import SolFormGroup from '../../../molecules/form-group';
import SolInputAmount from '../../../molecules/input-amount';
import './index.scss';

type Props = {
	walletInfo?: any;
	yourBalance: any;
	asset?: any;
	networkFrom?: any;
	networkTo?: any;
	amount?: any;
	destination?: string;
	destinationIcon?: string;
	onConnectWallet?: () => void;
	onSelectAsset?: () => void;
	onSelectNetwork: (networkType: string) => void;
	onAmountChange: any;
	onSwap?: () => void;
};

const SolBridgeForm = ({
	walletInfo,
	yourBalance,
	asset,
	networkFrom,
	networkTo,
	amount,
	destination,
	destinationIcon,
	onConnectWallet,
	onSelectAsset,
	onSelectNetwork,
	onAmountChange,
	onSwap
}: Props) => {
	return (
		<div className="sol-bridge-form">
			<div className="sol-bridge-form-body">
				<SolFormGroup
					label="Asset"
					placeholder="Select asset"
					leftIcon={asset ? <img src={asset?.logo} alt="" /> : '...'}
					rightIcon={<img src="/images/icons/arrow-right.svg" alt="" />}
					value={asset?.name}
					readOnly={true}
					onClick={onSelectAsset}
				/>
				<div className="sol-bridge-form-row">
					<SolFormGroup
						label="From"
						placeholder="Select network"
						leftIcon={
							networkFrom ? <img src={networkFrom?.logo} alt="" /> : '...'
						}
						rightIcon={<img src="/images/icons/arrow-right.svg" alt="" />}
						value={networkFrom?.name}
						readOnly
						onClick={() => onSelectNetwork('from')}
					/>
					<button type="button" className="sol-btn-swap">
						<img src="/images/icons/swap.svg" alt="" />
					</button>
					<SolFormGroup
						label="To"
						placeholder="Select network"
						leftIcon={networkTo ? <img src={networkTo?.logo} alt="" /> : '...'}
						rightIcon={<img src="/images/icons/arrow-right.svg" alt="" />}
						value={networkTo?.name}
						readOnly
						onClick={() => onSelectNetwork('to')}
					/>
				</div>

				<SolInputAmount
					label="Amount"
					subLabel={<>Available: {yourBalance}</>}
					value={amount}
					maxValue={yourBalance}
					readOnly={!walletInfo}
					note={
						<>
							<div className="d-flex align-items-center justify-content-between">
								<span>Daily Limit (Per Address)</span>
								<span>0 / 0</span>
							</div>
							<div className="d-flex align-items-center justify-content-between">
								<span>Daily Limit (Total)</span>
								<span>0 / 0</span>
							</div>
						</>
					}
					onClickMax={() => onAmountChange(yourBalance)}
					onChange={onAmountChange}
				/>

				<SolFormGroup
					label="Destination"
					placeholder="..."
					leftIcon={
						destinationIcon ? <img src={destinationIcon} alt="" /> : '...'
					}
					value={destination}
					readOnly={true}
					note={
						<>
							<img src="/images/icons/info.svg" alt="" width={16} height={16} />
							<span>This is the destination address on the BNB Chain.</span>
						</>
					}
				/>
			</div>
			<div className="sol-bridge-form-action">
				{walletInfo ? (
					<SolButton
						size="lg"
						variant="primary"
						className="w-100"
						caption="Swap"
						onClick={onSwap}
					/>
				) : (
					<WalletMultiButton className='sol-btn sol-btn-primary'/>
				)}
			</div>
		</div>
	);
};
export default SolBridgeForm;
