// import SolStakingStep from 'src/components/organisms/common/staking-step';
import { useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../../../../redux/rootReducer';
import { solaUtils } from '../../../../../../../services/blockchain';
import { formatNumberDownRound } from '../../../../../../../services/helpers';
import { WalletInfo } from '../../../../../../../types/ido.type';
import { config } from '../../../../../../../_config';
import SolStakingStep from '../../../../../common/staking-step';
import './index.scss';

interface SolStakingStakeStep2Props {
	stakeAmount?: number;
	stakingSymbol?: string;
	onStakeAmountChange?: (amount: number) => void;
}

const SolStakingStakeStep2 = ({
	stakeAmount = 0,
	stakingSymbol,
	onStakeAmountChange
}: SolStakingStakeStep2Props) => {
	const { publicKey } = useWallet();
	const [balanceToken, setBalanceToken] = useState<string | 0>('');
	useEffect(() => {
		if (publicKey) {
			solaUtils
				.getBalanceOfToken(new PublicKey(config.SOLVPAD_TOKEN_MINT), publicKey)
				.then((value: string) => {
					setBalanceToken(formatNumberDownRound(value));
				});
		}
	}, []);

	const handleStakeAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const amount = parseFloat(e.target.value);
		onStakeAmountChange?.(
			amount <= Number(balanceToken) ? amount : Number(balanceToken)
		);
	};

	return (
		<SolStakingStep
			title="How much do you want to stake?"
			description={`Please enter the amount of ${stakingSymbol} you want to stake`}
			className="sol-staking-stake-step2"
		>
			<input
				autoFocus
				type="number"
				className="sol-staking-stake-input"
				placeholder="0.0000"
				min={0.0001}
				value={stakeAmount}
				onChange={handleStakeAmountChange}
			/>
			<div className="sol-staking-stake-balance">
				Your balance:{' '}
				<b>
					{balanceToken} {stakingSymbol}
				</b>
			</div>
		</SolStakingStep>
	);
};
export default SolStakingStakeStep2;
