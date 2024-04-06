import { useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { useEffect, useState } from 'react';
import { solaUtils } from '../../../../../../../services/blockchain';
import { formatNumberDownRound } from '../../../../../../../services/helpers';
import { config } from '../../../../../../../_config';
import SolInputAmount from '../../../../../../molecules/input-amount';
import SolStakingStep from '../../../../../common/staking-step';
import './index.scss';

interface SolStakingUnstakeStep3Props {
	stakeAmount?: number | string;
	stakingSymbol?: string;
	onStakeAmountChange?: (amount: number) => void;
}

const SolStakingUnstakeStep3 = ({
	stakeAmount,
	stakingSymbol,
	onStakeAmountChange
}: SolStakingUnstakeStep3Props) => {

    const { publicKey } = useWallet();
	const [balanceToken, setBalanceToken] = useState<string | 0>('');
	useEffect(() => {
		if (publicKey) {
			solaUtils
				.getBalanceOfToken(new PublicKey(config.SOLVPAD_TOKEN_MINT), publicKey)
				.then((value: string) => {
					setBalanceToken(value);
				});
		}
	}, []);

	const handleStakeAmountChange = (value: string) => {
		if(!value.length) return onStakeAmountChange?.(0);
		const amount = parseFloat(value);
		onStakeAmountChange?.(
			amount <= Number(formatNumberDownRound(balanceToken).replace(/,/g, ''))
				? amount
				: Number(formatNumberDownRound(balanceToken).replace(/,/g, ''))
		);
	};
	return (
		<SolStakingStep
			title="How much do you want to stake?"
			description={`Please enter the amount of ${stakingSymbol} you want to stake`}
			className="sol-staking-stake-step2"
		>
			<SolInputAmount
				label="Amount"
				isReverse
				subLabel={
					<>
						Your balance:{' '}
						{
							<b>
								{formatNumberDownRound(balanceToken)} {stakingSymbol}
							</b>
						}
					</>
				}
				value={String(stakeAmount)}
				maxValue={balanceToken}
				onClickMax={() => {
                    debugger
					handleStakeAmountChange(String(balanceToken));
				}}
				onChange={handleStakeAmountChange}
			/>
			{/* <input
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
					{formatNumberDownRound(balanceToken)} {stakingSymbol}
				</b>
			</div> */}
		</SolStakingStep>
	);
};
export default SolStakingUnstakeStep3;
