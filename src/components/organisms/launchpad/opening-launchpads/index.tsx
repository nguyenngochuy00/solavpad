import moment from 'moment';
import { Key, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';
import { Link, useNavigate } from 'react-router-dom';
import { APP_ROUTES, LAUNCHPAD_STATUS } from '../../../../constants';
import { formatNumberDownRound } from '../../../../services/helpers/helpers';
import { ProjectDetail } from '../../../../types';
import SolButton from '../../../atoms/button';
import SolAvailableOn from '../../../molecules/available-on';
import SolInfo from '../../../molecules/info-block';
import SolPoolImage from '../../../molecules/pool-image';
import SolProgressBar from '../../../molecules/progress-bar';
import SolPoolCard, { renderCountDownOpen } from '../../common/pool-card';
import './index.scss';

interface SolLaunchpadOpeningProps {
	sectionTitle?: string;
	projectData?: ProjectDetail[];
}

const SolLaunchpadOpening = ({
	sectionTitle = '',
	projectData = []
}: SolLaunchpadOpeningProps) => {
	const navigate = useNavigate();
	const [showCountDown, setShowCountDown] = useState(true);
	const onComplete = () => {
		setShowCountDown(false);
	};
	useEffect(() => {
		if (projectData?.length && projectData[0].state === 'P') {
			const startTime = projectData[0]?.openTimestamp * 1000 || 0;
			if (moment().isBefore(new Date(startTime))) {
				setShowCountDown(true);
			} else {
				setShowCountDown(false);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [projectData]);

	useEffect(() => {
		if(sectionTitle === "Opening Launchpads" && projectData.length) {
			debugger
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sectionTitle, projectData]);

	return (
		<>
			{sectionTitle ? <h3>{sectionTitle}</h3> : <></>}
			{sectionTitle === "Opening Launchpads" && projectData?.filter(
				(item: ProjectDetail) => item?.state === LAUNCHPAD_STATUS.OPENING || item?.state === LAUNCHPAD_STATUS.FSFC
			).length > 1 ? (
				<Row>
					{projectData
						.filter(
							(item: ProjectDetail) => item?.state === LAUNCHPAD_STATUS.OPENING || item?.state === LAUNCHPAD_STATUS.FSFC
						)
						.map((project: ProjectDetail, index: Key | null | undefined) => (
							<Col key={index} xxl="4" lg="6">
								<SolPoolCard
									projectData={project}
									status={LAUNCHPAD_STATUS.OPENING}
								/>
							</Col>
						))}
				</Row>
			) : (
				<div className="sol-launchpad-opening">
					{projectData?.length ? (
						<Row className="gx-xxl-5 gy-4">
							<Col xl="4">
								<Link
									to={
										projectData[0].state === 'O'
											? projectData[0]?.routeUrl || ''
											: `/${APP_ROUTES.LAUNCHPAD_DETAIL.path.replace(
													':id',
													String(projectData[0]?.id || '')
											  )}`
									}
									className="sol-launchpad-opening-img"
								>
									<SolPoolImage
										src={projectData[0]?.logo}
										networkIcon={'/images/images/Solana_logo_1.png'}
										networkName={'SOLANA'}
										type="type-2"
									/>
								</Link>
							</Col>
							<Col xl="8">
								<Link
									to={
										projectData[0].state === 'O'
											? projectData[0]?.routeUrl || ''
											: `/${APP_ROUTES.LAUNCHPAD_DETAIL.path.replace(
													':id',
													String(projectData[0]?.id || '')
											  )}`
									}
									className="sol-launchpad-opening-title"
								>
									{projectData[0]?.name}
								</Link>
								<div className="sol-launchpad-opening-description">
									{projectData[0]?.description}
								</div>
								<div className="sol-launchpad-opening-stats">
									<SolInfo
										size="lg"
										label="Swap rate"
										value={`1 ${
											projectData[0]?.symbol
										} = ${formatNumberDownRound(
											Number(projectData[0]?.rate || 0),
											6
										)} ${projectData[0]?.projectTokenSymbol}`}
									/>
									<SolInfo
										size="lg"
										label="Total Supply"
										value={formatNumberDownRound(
											Number(projectData[0]?.totalSupply) | 0,
											0
										)}
									/>
									<SolInfo
										size="lg"
										label="Access"
										value={projectData[0]?.isPrivate ? 'Private' : 'Public'}
									/>
								</div>
								<div className="sol-launchpad-opening-progress">
									<div className="sol-launchpad-opening-progress-label">
										Progress
									</div>
									{/* TO-DO: get percent coverage */}
									<SolProgressBar
										percent={Number(
											(Number(projectData[0]?.participated?.toString()) /
												Number(projectData[0]?.cap?.toString())) *
												100 || 0
										)}
										size="lg"
									/>
									<div className="sol-launchpad-opening-progress-info">
										<span>Allocation round</span>
										<span>
											<b>{projectData[0]?.participatedCount || 0}</b>{' '}
											participants
										</span>
									</div>
								</div>
								<div className="sol-launchpad-opening-action">
									{projectData[0].state === 'P' && showCountDown ? (
										<div
											className={`sol-btn sol-btn-primary`}
											style={{ cursor: 'none', opacity: 0.5 }}
										>
											<span>
												Open in <span></span>
												<Countdown
													date={
														new Date(projectData[0]?.openTimestamp * 1000 || 0)
													}
													intervalDelay={1}
													precision={3}
													renderer={renderCountDownOpen}
													onComplete={onComplete}
												/>
											</span>
										</div>
									) : (
										<Link
											to={`/${APP_ROUTES.LAUNCHPAD_DETAIL.path.replace(
												':id',
												String(projectData[0]?.id || '')
											)}`}
											className="sol-btn sol-btn-lg sol-btn-primary"
										>
											{projectData[0].state === 'O'
												? 'Join Now'
												: 'View Detail'}
										</Link>
									)}

									<SolAvailableOn
										telegram={projectData[0]?.telegram}
										twitter={projectData[0]?.twitter}
										webURL={projectData[0]?.website}
										size="lg"
									/>
								</div>
							</Col>
						</Row>
					) : (
						<div> No projects currently open</div>
					)}
				</div>
			)}
		</>
	);
};
export default SolLaunchpadOpening;
