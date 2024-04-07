// import SolButton from "src/components/atoms/button";
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux/rootReducer';
import SolButton from '../../../atoms/button';
import { renderCountDownOpen } from '../../common/pool-card';
import './index.scss';

interface SolStakingYourInformationProps {
	staked?: string;
	unstaked?: string;
	rewards?: string;
	symbol?: any;
	withdrawTimestamp?: number;
	onStake?: () => void;
	onWithdraw?: () => void;
}

const SolStakingYourInformation = ({
	staked = '0.0000',
	unstaked = '0.0000',
	rewards = '0.0000',
	symbol,
	withdrawTimestamp,
	onStake,
	onWithdraw
}: SolStakingYourInformationProps) => {
	const stakingInfo = useSelector(
		(state: AppState) => state.staking.stakeDetail
	);
	return (
		<div className="sol-staking-your-information">
			<div className="sol-staking-your-information-block">
				<label>Your Staked</label>
				<b>{staked}</b>
			</div>
			<div className="sol-staking-your-information-block">
				<label>Your Unstaked</label>
				<b>{unstaked}</b>
				{withdrawTimestamp && (parseInt(String(Date.now()/1000)) <= withdrawTimestamp) && (
					<div className="text-white">
						<span>Withdrawable in: </span>
						<Countdown
							date={new Date(Number(withdrawTimestamp) * 1000 || 0)}
							intervalDelay={1}
							precision={3}
							renderer={renderCountDownOpen}
							autoStart
						/>
					</div>
				)}
			</div>
			<div className="sol-staking-your-information-block last">
				<label>Your Rewards</label>
				<b>{rewards}</b>
			</div>
			<div className="sol-staking-your-information-action">
				<SolButton
					disabled={Number(stakingInfo.reward) <= 0}
					onClick={onStake}
					variant="primary"
					caption="Stake"
				/>
				<SolButton
					disabled={Number(stakingInfo.reward) <= 0}
					onClick={onWithdraw}
					caption="Withdraw"
				/>
			</div>
		</div>
	);
};
export default SolStakingYourInformation;
