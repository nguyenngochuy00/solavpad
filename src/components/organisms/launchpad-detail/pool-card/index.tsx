import { useWallet } from '@solana/wallet-adapter-react';
import { Col, Row } from 'react-bootstrap';
import { useSolBalance } from '../../../../hooks/useState';
import { formatNumberDownRound } from '../../../../services/helpers';
import { LaunchpadStatus, ProjectDetail } from '../../../../types';
import { WalletInfo } from '../../../../types/ido.type';
import SolButton from '../../../atoms/button';
import SolInfo from '../../../molecules/info-block';
import SolProgressBar from '../../../molecules/progress-bar';
import './index.scss';

interface SolLaunchpadDetailPoolCardProps {
	opening?: boolean;
	enableJoin: boolean;
	walletInfo?: WalletInfo;
	onJoinPool?: () => void;
	onConnectWallet?: () => void;
	onRecallWalletInfo?: () => void;
	projectInfor?: ProjectDetail;
}

const SolLaunchpadDetailPoolCard = ({
	opening,
	enableJoin,
	walletInfo,
	projectInfor,
	onJoinPool,
	onConnectWallet,
	onRecallWalletInfo
}: SolLaunchpadDetailPoolCardProps) => {
	const { connected } = useWallet();
	const solBal = useSolBalance();

	const reCallWalletInfor = () => {
		if (onRecallWalletInfo) onRecallWalletInfo();
	};
	return (
		<div
			className={`sol-launchpad-detail-pool-card ${opening ? 'active' : ''}`}
		>
			<Row className="gx-lg-5">
				{connected && (
					<Col lg="4">
						<div className="sol-launchpad-detail-pool-card-left">
							<SolInfo
								label="Your balance"
								value={`${formatNumberDownRound(
									Number(walletInfo?.tokenBalance),
									9
								)} ${projectInfor?.symbol}`}
								value2={`${formatNumberDownRound(solBal, 9)} SOL`}
								size="lg"
							/>

							<SolInfo
								label="Your tier"
								value={walletInfo?.tierName}
								size="lg"
							/>
						</div>
					</Col>
				)}

				<Col lg={`${connected ? '8' : '12'}`}>
					<div className="sol-launchpad-detail-pool-card-right">
						{projectInfor?.state === 'C' && (
							<SolInfo label={'<u>CLOSED<u>'} value="" size="lg" />
						)}

						{projectInfor?.state === 'P' && (
							<SolInfo
								label={'<u>Open in:<u>'}
								value={projectInfor?.openTimestamp}
								isCountDown
								onCompleteFc={reCallWalletInfor}
								size="lg"
							/>
						)}

						{projectInfor?.state === 'O' &&
							(connected ? (
								walletInfo?.roundState !== 4 ? (
									<SolInfo
										label={walletInfo?.roundStateText || ''}
										value={walletInfo?.roundTimestamp}
										size="lg"
										isCountDown
										onCompleteFc={reCallWalletInfor}
									/>
								) : (
									<SolInfo label={'<u>ROUND CLOSE<u>'} value={''} size="lg" />
								)
							) : (
								<SolInfo
									label="First Come First Serve <u>opens</u> in:"
									value={projectInfor?.fcfsTimestamp}
									size="lg"
									isCountDown
								/>
							))}

						{projectInfor?.state === 'F' &&
							(connected ? (
								walletInfo?.roundState !== 4 ? (
									<SolInfo
										label={walletInfo?.roundStateText || ''}
										value={walletInfo?.roundTimestamp}
										size="lg"
										isCountDown
										onCompleteFc={reCallWalletInfor}
									/>
								) : (
									<SolInfo label={'<u>ROUND CLOSE<u>'} value={''} size="lg" />
								)
							) : (
								<SolInfo
									label="Closing in:"
									value={projectInfor?.closeTimestamp}
									size="lg"
									isCountDown
								/>
							))}

						{/* {connected ? (
							walletInfo?.roundState !== 4 ? (
								<SolInfo
									label={walletInfo?.roundStateText || ''}
									value={opening ? countDownTime : 'Closed'}
									size="lg"
									isCountDown={opening}
									onCompleteFc={reCallWalletInfor}
								/>
							) : (
								<SolInfo label={'ROUND CLOSE'} value={''} size="lg" />
							)
						) : (
							<SolInfo
								label="First Come First Serve <u>opens</u> in:"
								value={countDownTime}
								size="lg"
								isCountDown
							/>
						)} */}

						<Row>
							<Col md="6">
								<SolInfo
									label="Swapped"
									value={`${formatNumberDownRound(
										Number(walletInfo?.userParticipation),
										projectInfor?.decimals
									)} ${projectInfor?.symbol}`}
									value2={`${formatNumberDownRound(
										(Number(projectInfor?.rate) *
											Number(walletInfo?.userParticipation)) /
											1000000
									)} ${projectInfor?.projectTokenSymbol}`}
									size="lg"
								/>
							</Col>
							<Col md="6">
								<SolInfo
									label="Remaining Allocation"
									value={`${formatNumberDownRound(
										Number(walletInfo?.remainingAllocation)
									)} ${projectInfor?.symbol}`}
									size="lg"
								/>
							</Col>
						</Row>

						<SolProgressBar
							percent={Number(
								(Number(projectInfor?.participated?.toString()) /
									Number(projectInfor?.cap?.toString())) *
									100 || 0
							)}
							size="lg"
						/>
						<div className="sol-progress-bar-info">
							<span>
								{opening
									? 'Allocation round'
									: `${
											(Number(projectInfor?.participated?.toString()) /
												Number(projectInfor?.cap?.toString())) *
												100 || 0
									  }%`}
							</span>
							<span>
								<b>{projectInfor?.participatedCount || 0}</b> participants
							</span>
						</div>
						{opening ? (
							<div className="sol-launchpad-detail-pool-card-action">
								{walletInfo ? (
									<>
										<SolButton
											disabled={!enableJoin}
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
