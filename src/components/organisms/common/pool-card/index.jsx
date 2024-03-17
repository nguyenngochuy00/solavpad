import { Link, useNavigate } from 'react-router-dom';
import SolAvailableOn from 'src/components/molecules/available-on';
import SolInfo from 'src/components/molecules/info-block';
import SolPoolImage from 'src/components/molecules/pool-image';
import SolProgressBar from 'src/components/molecules/progress-bar';
import { LAUNCHPAD_STATUS } from 'src/constants';
import './index.scss';
import { APP_ROUTES } from 'src/constants';
import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import SolButton from 'src/components/atoms/button';
import moment from 'moment';
import { formatNumberDownRound } from 'src/utils/helpers';

// {
// 	"id": 99,
// 	"contract": "0x1450d40aE249C09cFc83Bc40bb2c1d1ac1a0d0ee",
// 	"contractVersion": 0,
// 	"openTime": "2024-01-31T02:45:41.000Z",
// 	"closeTime": "2024-01-31T02:45:44.000Z",
// 	"decimals": 9,
// 	"isPrivate": false,
// 	"rate": "1000",
// 	"totalCountWallet": 0,
// 	"totalCountUserParticipated": 0,
// 	"totalFundParticipated": 0,
// 	"maxSingleParticipationAllocated": 0,
// 	"maxTotalParticipationAllocated": "0",
// 	"description": "At BlastFi, for visionary developers and investors to collaborate and propel the blast chain forward.",
// 	"telegram": "https://t.me/Blast_Fi",
// 	"projectTokenAddress": "0xbe96188F78242B595E94E03e0810EEfA76BD5309",
// 	"logo": "e28c130a-a7fd-4a0e-a662-82b6199cb37e",
// 	"medium": "https://medium.com/test",
// 	"name": "Dummy",
// 	"projectTokenSymbol": "BLASTFI",
// 	"totalSupply": "1000000",
// 	"twitter": "https://twitter.com/Blast_Fi",
// 	"website": "https://blastfi.io/",
// 	"yourAllocationVisible": true,
// 	"projectTokenContract": "0xbe96188F78242B595E94E03e0810EEfA76BD5309",
// 	"symbol": "USDB",
// 	"disabled": false,
// 	"start": "2024-01-31T02:45:00",
// 	"end": "2024-01-31T02:45:00",
// 	"staking": "02:45:00",
// 	"allocation": "02:45:00",
// 	"fcfs": "02:45:00",
// 	"allDay": true,
// 	"tokenAddress": "0x55d398326f99059fF775485246999027B3197955",
// 	"state": "P",
// 	"sort": 1,
// 	"tags": ["blastfi", "defi", "launchpad"],
// 	"color": "#FF8838",
// 	"youtube_id": "bi8lY-wXrik",
// 	"parallax_image": "ab831055-6290-4727-806c-fb0f950be814",
// 	"articles": [1, 2, 3, 6, 7, 8],
// 	"tokenmetrics": [1, 2, 3, 4, 5, 6, 7, 8],
// 	"images": [1, 2]
// },

const SolPoolCard = ({ projectData, status = LAUNCHPAD_STATUS.OPENING }) => {
	const navigate = useNavigate();

	const [showCountDown, setShowCountDown] = useState(true);

	useEffect(() => {
		if (projectData && status === LAUNCHPAD_STATUS.UPCOMING) {
			const startTime = projectData?.start;
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
			{projectData.status === LAUNCHPAD_STATUS.UPCOMING ? (
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
						projectData?.id
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
			{projectData.status === LAUNCHPAD_STATUS.UPCOMING ? (
				<div className="sol-pool-card-title">{projectData.name}</div>
			) : (
				<Link
					to={`/${APP_ROUTES.LAUNCHPAD_DETAIL.path.replace(
						':id',
						projectData?.id
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
			<div className="sol-pool-card-stats">
				<SolInfo
					size="value"
					label="Swap rate"
					value={`1 ◎ = ${formatNumberDownRound(projectData?.rate, 0)} ${
						projectData?.symbol
					}`}
				/>
				<SolInfo
					size="value"
					label="Total Supply"
					value={formatNumberDownRound(projectData?.totalSupply, 0)}
				/>
			</div>

			{/* Launchpad progress */}
			{projectData.status === LAUNCHPAD_STATUS.COMPLETED ? (
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
									date={new Date(projectData?.start)}
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
							projectData?.id
						)}`}
						className="sol-btn"
					>
						View details
					</Link>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};
export default SolPoolCard;

const renderCountDownOpen = ({ days, hours, minutes, seconds, completed }) => {
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
