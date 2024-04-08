import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { checkIsValid } from '../../../../../../../pages/staking/redux/actions';
import { AppState } from '../../../../../../../redux/rootReducer';
import { formatNumberDownRound } from '../../../../../../../services/helpers';
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
	const dispatch = useDispatch();
	const stakedValue = useSelector(
		(state: AppState) => state.staking.stakeDetail.staked
	);
    
    const isPause = useSelector((state: AppState) => state.staking.isPause)

	useEffect(() => {
		if (stakeAmount && !isPause) {
			dispatch(checkIsValid(true));
		} else {
			dispatch(checkIsValid(false));
		}
	}, [stakeAmount, isPause]);

	const handleStakeAmountChange = (value: string) => {
		if (!value.length) return onStakeAmountChange?.(0);
		const amount = parseFloat(value);
		onStakeAmountChange?.(
			amount <= Number(formatNumberDownRound(stakedValue).replace(/,/g, ''))
				? amount
				: Number(formatNumberDownRound(stakedValue).replace(/,/g, ''))
		);
	};

	return (
		<SolStakingStep
			title="How much do you want to unstake?"
			description={`Please enter the amount of ${stakingSymbol} you want to unstake`}
			className="sol-staking-stake-step2"
		>
			<SolInputAmount
				label="Amount"
				isReverse
				subLabel={
					<>
						Your staked:{' '}
						{
							<b>
								{formatNumberDownRound(stakedValue)} {stakingSymbol}
							</b>
						}
					</>
				}
				value={String(stakeAmount)}
				maxValue={stakedValue}
				onClickMax={() => {
					handleStakeAmountChange(String(stakedValue));
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
