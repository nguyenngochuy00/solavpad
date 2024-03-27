import { Col, Row } from 'react-bootstrap';
import SolButton from '../../../atoms/button';
import SolInfo from '../../../molecules/info-block';
import SolProgressBar from '../../../molecules/progress-bar';
// import SolButton from 'src/components/atoms/button';
// import SolInfo from 'src/components/molecules/info-block';
// import SolProgressBar from 'src/components/molecules/progress-bar';
import './index.scss';
import { WalletInfo } from '../../../../types/ido.type';

interface SolLaunchpadDetailPoolCardProps {
	opening?: boolean;
	walletInfo?: WalletInfo;
	countDownTime?: number | string;
	yourBalance?: string | number;
	yourBalanceConvert?: string | number;
	yourApprovedAmount?: string | number;
	yourTier?: string | number;
	swappedValue?: string | number;
	swappedValueConvert?: string | number;
	remainingAllocation?: string | number;
	progressPercent?: number | string;
	participants?: number | string;
	onJoinPool?: () => void;
	onApprove?: () => void;
	onConnectWallet?: () => void;
}

const SolLaunchpadDetailPoolCard = ({
	opening,
	walletInfo,
	countDownTime,
	yourBalance,
	yourBalanceConvert,
	yourApprovedAmount,
	yourTier,
	swappedValue,
	swappedValueConvert,
	remainingAllocation,
	progressPercent,
	participants,
	onJoinPool,
	// onApprove,
	onConnectWallet
}: SolLaunchpadDetailPoolCardProps) => {
	return (
		<div
			className={`sol-launchpad-detail-pool-card ${opening ? 'active' : ''}`}
		>
			<Row className="gx-lg-5">
				<Col lg="4">
					<div className="sol-launchpad-detail-pool-card-left">
						<SolInfo
							label="Your balance"
							value={yourBalance}
							value2={yourBalanceConvert}
							size="lg"
						/>
						<SolInfo label="Your tier" value={yourTier} size="lg" />
					</div>
				</Col>
				<Col lg="8">
					<div className="sol-launchpad-detail-pool-card-right">
						<SolInfo
							label={
								opening ? 'Allocation Round Closed in:' : 'Allocation Round'
							}
							value={opening ? countDownTime : 'Closed'}
							size="lg"
						/>
						<Row>
							<Col md="6">
								<SolInfo
									label="Swapped"
									value={swappedValue}
									value2={swappedValueConvert}
									size="lg"
								/>
							</Col>
							<Col md="6">
								<SolInfo
									label="Remaining Allocation"
									value={remainingAllocation}
									size="lg"
								/>
							</Col>
						</Row>
						<SolProgressBar percent={Number(progressPercent)} size="lg" />
						<div className="sol-progress-bar-info">
							<span>
								{opening ? 'Allocation round' : `${progressPercent}%`}
							</span>
							<span>
								<b>{participants}</b> participants
							</span>
						</div>
						{opening ? (
							<div className="sol-launchpad-detail-pool-card-action">
								{walletInfo ? (
									<>
										<SolButton
											variant="primary"
											size="lg"
											caption="Join Pool"
											onClick={onJoinPool}
										/>
										{/* <SolButton
											size="lg"
											caption="Approve"
											onClick={onApprove}
										/> */}
									</>
								) : (
									<SolButton
										variant="primary"
										size="lg"
										caption="Connect wallet"
										onClick={onConnectWallet}
									/>
								)}
							</div>
						) : (
							<></>
						)}
					</div>
				</Col>
			</Row>
		</div>
	);
};
export default SolLaunchpadDetailPoolCard;
