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
	yourTokenBalance?: string | number;
	yourNativeCoinBalance?: string | number;
	yourApprovedAmount?: string | number;
	yourTier?: string ;
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
	// roundInfo,
	walletInfo,
	countDownTime,
	yourTokenBalance,
	yourNativeCoinBalance,
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
							value={yourTokenBalance}
							value2={yourNativeCoinBalance}
							size="lg"
						/>
						<SolInfo label="Your tier" value={yourTier} size="lg" />
					</div>
				</Col>
				<Col lg="8">
					<div className="sol-launchpad-detail-pool-card-right">
						<SolInfo
							label={walletInfo?.roundStateText || 'Time remaining'}
							value={opening ? countDownTime : 'Closed'}
							size="lg"
						/>
						<Row>
							<Col md="6">
								<SolInfo
									label="Swapped"
									value={swappedValue || 0}
									value2={swappedValueConvert || 0}
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
