import { Col, Row } from 'react-bootstrap';
import SolCard from 'src/components/molecules/card';
import './index.scss';
import { BigNumber } from 'bignumber.js';
import { formatNumberDownRound } from 'src/utils/helpers';
import { get } from 'lodash';

const SolLaunchpadDetailPoolInfo = ({ projectInfo, idoInfo }) => {
	console.log('projectInfo', projectInfo);
	console.log('idoInfo', idoInfo);
	return (
		<div className="sol-launchpad-detail-pool-info">
			<Row>
				<Col lg="6">
					<SolCard title="Pool Information" className="h-100">
						<table>
							<tbody>
								<tr>
									<td>Opens</td>
									<td>
										<b>
											{new Date(idoInfo?.openTimestamp * 1000).toLocaleString()}
										</b>
									</td>
								</tr>
								<tr>
									<td>FCFS Opens</td>
									<td>
										<b>{projectInfo?.fcfsOpens}</b>
									</td>
								</tr>
								<tr>
									<td>Closes</td>
									<td>
										<b>{projectInfo?.closes}</b>
									</td>
								</tr>
								<tr>
									<td>Swap Rate</td>
									<td>
										<b>{`1 ◎ = ${formatNumberDownRound(idoInfo?.rate, 0)} ${
											projectInfo?.symbol
										}`}</b>
									</td>
								</tr>
								<tr>
									<td>Cap</td>
									<td>
										<b>
											{formatNumberDownRound(
												new BigNumber(idoInfo?.cap)
													.dividedBy(
														10 ** get(idoInfo, 'raiseTokenDecimals', 9)
													)
													.toString(),
												0
											)}
										</b>
									</td>
								</tr>
								<tr>
									<td>Total Users Participated</td>
									<td>
										<b>
											{formatNumberDownRound(
												new BigNumber(idoInfo?.participated)
													.dividedBy(
														10 ** get(idoInfo, 'raiseTokenDecimals', 9)
													)
													.toString(),
												0
											)}
										</b>
									</td>
								</tr>
								<tr>
									<td>Total Funds Swapped</td>
									<td>
										<b>{projectInfo?.totalFundsSwapped}</b>
									</td>
								</tr>
								<tr>
									<td>Access Type</td>
									<td>
										<b>{projectInfo?.isPrivate ? 'Private' : 'Public'}</b>
									</td>
								</tr>
							</tbody>
						</table>
					</SolCard>
				</Col>
				<Col lg="6">
					<SolCard title="Token Information" action="+ Add to Metamask">
						<table>
							<tbody>
								<tr>
									<td>Name</td>
									<td>
										<b>{projectInfo?.name}</b>
									</td>
								</tr>
								<tr>
									<td>Token Symbol</td>
									<td>
										<b>{projectInfo?.symbol}</b>
									</td>
								</tr>
							</tbody>
						</table>
					</SolCard>

					<SolCard title="Schedule">
						<table>
							<tbody>
								{idoInfo?.rounds.map((item, index) => (
									<tr key={index}>
										<td>
											<b>{item.name}</b>
										</td>
										<td>
											<div>
												<span>Opens:</span>
												<b>{item.durationSeconds}</b>
											</div>
											<div>
												<span>Closes:</span>
												<b>{'item.closes'}</b>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</SolCard>
				</Col>
			</Row>
		</div>
	);
};
export default SolLaunchpadDetailPoolInfo;
