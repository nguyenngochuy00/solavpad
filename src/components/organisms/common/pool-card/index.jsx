import { Link } from 'react-router-dom';
import SolButton from 'src/components/atoms/button';
import SolAvailableOn from 'src/components/molecules/available-on';
import SolInfo from 'src/components/molecules/info-block';
import SolPoolImage from 'src/components/molecules/pool-image';
import SolProgressBar from 'src/components/molecules/progress-bar';
import { LAUNCHPAD_STATUS } from 'src/constants';
import './index.scss';

const SolPoolCard = ({ projectData }) => {
	return (
		<div className="sol-pool-card ">
			{/* Launchpad logo */}
			{
				projectData.status === LAUNCHPAD_STATUS.UPCOMING ?
					<div className='sol-pool-card-img'>
						<SolPoolImage
							src={projectData.logo}
							networkIcon={projectData.networkIcon}
							networkName={projectData.networkName}
						/>
					</div> :
					<Link to={projectData.routeUrl} className="sol-pool-card-img">
						<SolPoolImage
							src={projectData.logo}
							networkIcon={projectData.networkIcon}
							networkName={projectData.networkName}
						/>
					</Link>
			}

			{/* Launchpad name */}
			{
				projectData.status === LAUNCHPAD_STATUS.UPCOMING ?
					<div className='sol-pool-card-title'>{projectData.name}</div> :
					<Link to={projectData.routeUrl} className="sol-pool-card-title">
						{projectData.name}
					</Link>
			}

			{/* Launchpad short description */}
			<div className="sol-pool-card-description">{projectData.description}</div>

			{/* Launchpad community */}
			<div className="sol-pool-card-availabe">
				<SolAvailableOn
					telegram={projectData.telegram}
					twitter={projectData.twitter}
					webURL={projectData.webURL}
					size="md"
				/>
			</div>

			{/* Launchpad statistics */}
			<div className="sol-pool-card-stats">
				<SolInfo
					size="value"
					label="Swap rate"
					value={projectData.swapRate}
				/>
				<SolInfo size="value" label="Cap" value={projectData.cap} />
			</div>

			{/* Launchpad progress */}
			{
				projectData.status === LAUNCHPAD_STATUS.COMPLETED ? (
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
				) : <></>
			}

			{/* Launchpad action */}
			<div className="sol-pool-card-action">
				{projectData.status === LAUNCHPAD_STATUS.UPCOMING ?
					<SolButton caption="Open in 14d 6h 16m 40s" variant="primary" disabled /> : <></>
				}
				{projectData.status === LAUNCHPAD_STATUS.COMPLETED ?
					<Link to={projectData.routeUrl} className='sol-btn'>View details</Link> :
					<></>
				}
			</div>
		</div>
	);
};
export default SolPoolCard;
