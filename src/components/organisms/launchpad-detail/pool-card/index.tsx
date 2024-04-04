import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useSolBalance } from '../../../../hooks/useState';
import { getWalletInfor } from '../../../../pages/launchpad-detail/redux/actions';
import { AppState } from '../../../../redux/rootReducer';
import { formatNumberDownRound } from '../../../../services/helpers';
import SolButton from '../../../atoms/button';
import SolInfo from '../../../molecules/info-block';
import SolProgressBar from '../../../molecules/progress-bar';
import './index.scss';

interface SolLaunchpadDetailPoolCardProps {
	opening?: boolean;
	enableJoin: boolean;
	onJoinPool?: () => void;
	onConnectWallet?: () => void;
}

const SolLaunchpadDetailPoolCard = ({
	opening,
	enableJoin,
	onJoinPool,
	onConnectWallet
}: SolLaunchpadDetailPoolCardProps) => {
	const dispatch = useDispatch();
	const solBal = useSolBalance();
	const { publicKey, connected } = useWallet();

	const walletInfo = useSelector(
		(state: AppState) => state.launchpadDetail.walletInfor
	);

	const projectSelected = useSelector(
		(state: AppState) => state.launchpadDetail.launchpad
	);

	const reCallWalletInfor = () => {
		dispatch(
			getWalletInfor({
				projectContract: projectSelected?.contract,
				publicKey: publicKey
			})
		);
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
								)} ${projectSelected?.symbol}`}
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
						{projectSelected?.state === 'C' && (
							<SolInfo label={'<u>CLOSED<u>'} value="" size="lg" />
						)}

						{projectSelected?.state === 'P' && (
							<SolInfo
								label={'<u>Open in:<u>'}
								value={projectSelected?.openTimestamp}
								isCountDown
								onCompleteFc={reCallWalletInfor}
								size="lg"
							/>
						)}

						{projectSelected?.state === 'O' &&
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
									value={projectSelected?.fcfsTimestamp}
									size="lg"
									isCountDown
								/>
							))}

						{projectSelected?.state === 'F' &&
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
									value={projectSelected?.closeTimestamp}
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

						{connected ? (
							<Row>
								<Col md="6">
									<SolInfo
										label="Swapped"
										value={`${formatNumberDownRound(
											Number(walletInfo?.userParticipation),
											projectSelected?.decimals
										)} ${projectSelected?.symbol}`}
										value2={`${formatNumberDownRound(
											(Number(projectSelected?.rate) *
												Number(walletInfo?.userParticipation)) /
												1000000
										)} ${projectSelected?.projectTokenSymbol}`}
										size="lg"
									/>
								</Col>
								<Col md="6">
									<SolInfo
										label="Remaining Allocation"
										value={`${formatNumberDownRound(
											Number(walletInfo?.remainingAllocation)
										)} ${projectSelected?.symbol}`}
										size="lg"
									/>
								</Col>
							</Row>
						) : (
							<></>
						)}

						<SolProgressBar
							percent={Number(
								(Number(projectSelected?.participated?.toString()) /
									Number(projectSelected?.cap?.toString())) *
									100 || 0
							)}
							size="lg"
						/>
						<div className="sol-progress-bar-info">
							<span>
								{opening
									? 'Allocation round'
									: `${
											(Number(projectSelected?.participated?.toString()) /
												Number(projectSelected?.cap?.toString())) *
												100 || 0
									  }%`}
							</span>
							<span>
								<b>{projectSelected?.participatedCount || 0}</b> participants
							</span>
						</div>
						{opening ? (
							<div className="sol-launchpad-detail-pool-card-action">
								{connected ? (
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
									<WalletMultiButton className='sol-btn sol-btn-primary'/>
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
