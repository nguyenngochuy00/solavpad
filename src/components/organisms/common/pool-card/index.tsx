import { Link, useNavigate } from 'react-router-dom';
// import SolAvailableOn from 'src/components/molecules/available-on';
// import SolInfo from 'src/components/molecules/info-block';
// import SolPoolImage from 'src/components/molecules/pool-image';
// import SolProgressBar from 'src/components/molecules/progress-bar';

import './index.scss';
// import { APP_ROUTES } from 'src/constants';
import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
// import SolButton from 'src/components/atoms/button';
import moment from 'moment';
// import { formatNumberDownRound } from 'src/services/helpers';
import { APP_ROUTES, LAUNCHPAD_STATUS } from '../../../../constants';
import { formatNumberDownRound } from '../../../../services/helpers/helpers';
import { ProjectDetail } from '../../../../types';
import SolButton from '../../../atoms/button';
import SolAvailableOn from '../../../molecules/available-on';
import SolInfo from '../../../molecules/info-block';
import SolPoolImage from '../../../molecules/pool-image';
import SolProgressBar from '../../../molecules/progress-bar';
import { get } from 'lodash';
import BigNumber from 'bignumber.js';

type Props = {
	projectData: ProjectDetail;
	status?: string;
};

const SolPoolCard = ({
	projectData,
	status = LAUNCHPAD_STATUS.OPENING
}: Props) => {
	const navigate = useNavigate();

	const [showCountDown, setShowCountDown] = useState(true);

	useEffect(() => {
		if (projectData && status === LAUNCHPAD_STATUS.UPCOMING) {
			const startTime = projectData?.openTimestamp * 1000 || 0;
			if (moment().isBefore(new Date(startTime))) {
				setShowCountDown(true);
			} else {
				setShowCountDown(false);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [projectData]);

	const onComplete = () => {
		setShowCountDown(false);
	};

	return (
		<div className="sol-pool-card ">
			{/* Launchpad logo */}
			{projectData.contract === null || projectData.contract === 'TBA' ? (
				<div className="sol-pool-card-img">
					<SolPoolImage
						src={projectData.logo}
						networkIcon={'/images/images/Solana_logo_1.png'}
						networkName={'SOLANA'}
					/>
				</div>
			) : (
				<Link
					to={`/${APP_ROUTES.LAUNCHPAD_DETAIL.path.replace(
						':id',
						String(projectData?.id || '')
					)}`}
					className="sol-pool-card-img"
				>
					<SolPoolImage
						src={projectData?.logo}
						networkIcon={'/images/images/Solana_logo_1.png'}
						networkName={'SOLANA'}
					/>
				</Link>
			)}

			{/* Launchpad name */}
			{projectData.contract === null || projectData.contract === 'TBA' ? (
				<div className="sol-pool-card-title">{projectData.name}</div>
			) : (
				<Link
					to={`/${APP_ROUTES.LAUNCHPAD_DETAIL.path.replace(
						':id',
						String(projectData?.id || '')
					)}`}
					className="sol-pool-card-title"
				>
					{projectData.name}
				</Link>
			)}

			{/* Launchpad short description */}
			<div className="sol-pool-card-description">{projectData.description}</div>

			{/* Launchpad community */}
			<div className="sol-pool-card-availabe">
				<SolAvailableOn
					telegram={projectData.telegram}
					twitter={projectData.twitter}
					webURL={projectData.website}
					size="md"
				/>
			</div>

			{/* Launchpad statistics */}
			<div className="sol-pool-card-stats row">
				<div className="col-7">
					<SolInfo
						size="value"
						label="Swap rate"
						value={`1 ${projectData?.symbol} = ${formatNumberDownRound(
							Number(projectData?.rate || 0),
							6
						)} ${projectData?.projectTokenSymbol}`}
					/>
				</div>
				<div className="col-5">
					<SolInfo
						size="value"
						label="Cap"
						value={formatNumberDownRound(
							Number(
								new BigNumber(projectData?.cap)
									.dividedBy(10 ** get(projectData, 'raiseTokenDecimals', 9))
									.toString()
							),
							0
						)}
					/>
				</div>

				<div className="col-7">
					<SolInfo
						size="value"
						label="Total Supply"
						value={formatNumberDownRound(
							Number(projectData?.totalSupply || 0),
							0
						)}
					/>
				</div>
				<div className="col-5">
					<SolInfo
						size="value"
						label="Access"
						value={`${projectData.isPrivate ? 'Private' : 'Public'}`}
					/>
				</div>
			</div>

			{/* Launchpad progress */}
			{projectData.state === LAUNCHPAD_STATUS.COMPLETED ? (
				<div className="sol-pool-card-progress">
					<div className="sol-pool-card-progress-label">
						<span className="progress-label">Progress</span>
						<span className="progress-label">
							<b>{projectData.participants}</b> participants
						</span>
					</div>
					<SolProgressBar percent={projectData.progressPercent} />
					<div className="sol-pool-card-progress-info">
						<b>{projectData.progressPercent}%</b>
						<span className="progress-info-parti">
							<b>{projectData.progressCurent}</b>/
							<b>{projectData.progressValue}</b>
						</span>
					</div>
				</div>
			) : (
				<></>
			)}

			{/* Launchpad action */}
			<div className="sol-pool-card-action">
				{status === LAUNCHPAD_STATUS.UPCOMING ? (
					showCountDown ? (
						<div
							className={`sol-btn sol-btn-primary`}
							style={{ cursor: 'none', opacity: 0.5 }}
						>
							<span>
								Open in <span></span>
								<Countdown
									date={new Date(projectData?.openTimestamp * 1000 || 0)}
									intervalDelay={1}
									precision={3}
									renderer={renderCountDownOpen}
									onComplete={onComplete}
								/>
							</span>
						</div>
					) : (
						<SolButton
							caption="Join Now"
							variant="primary"
							onClick={() => navigate(`/launchpad/${projectData?.id}`)}
						/>
					)
				) : (
					<></>
				)}
				{status === LAUNCHPAD_STATUS.COMPLETED ? (
					<Link
						to={`/${APP_ROUTES.LAUNCHPAD_DETAIL.path.replace(
							':id',
							String(projectData?.id || '')
						)}`}
						className="sol-btn"
					>
						View details
					</Link>
				) : (
					<></>
				)}

				{status === LAUNCHPAD_STATUS.OPENING ? (
					<Link
						to={`/${APP_ROUTES.LAUNCHPAD_DETAIL.path.replace(
							':id',
							String(projectData?.id || '')
						)}`}
						className="sol-btn"
					>
						Join now
					</Link>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};
export default SolPoolCard;

export const renderCountDownOpen = ({
	days,
	hours,
	minutes,
	seconds,
	completed
}: any) => {
	if (completed) {
		// Render a completed state
		return null;
	} else {
		if (days === 0) {
			return (
				<span className="">
					{hours.toString().padStart(2, '0') + 'h'}:
					{minutes.toString().padStart(2, '0') + 'm'}:
					{seconds.toString().padStart(2, '0') + 's'}
				</span>
			);
		} else {
			return (
				<span className="">
					{days + 'd'}:{hours.toString().padStart(2, '0') + 'h'}:
					{minutes.toString().padStart(2, '0') + 'm'}:
					{seconds.toString().padStart(2, '0') + 's'}
				</span>
			);
		}
	}
};
