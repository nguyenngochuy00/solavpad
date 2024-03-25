import { Col, Row } from 'react-bootstrap';
import './index.scss';
import { BigNumber } from 'bignumber.js';
import { get } from 'lodash';
import {
	ReactElement,
	JSXElementConstructor,
	ReactNode,
	ReactPortal,
	Key
} from 'react';
import SolCard from '../../../molecules/card';
import { formatNumberDownRound } from '../../../../services/helpers/helpers';
import { IdoInfoType, ProjectDetail } from '../../../../types';

interface SolLaunchpadDetailPoolInfoProps {
	projectInfo: ProjectDetail | undefined;
	idoInfo: IdoInfoType | undefined;
}

const SolLaunchpadDetailPoolInfo = ({
	projectInfo,
	idoInfo
}: SolLaunchpadDetailPoolInfoProps) => {
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
											{new Date(
												(idoInfo?.openTimestamp || 0) * 1000
											).toLocaleString()}
										</b>
									</td>
								</tr>
								<tr>
									<td>FCFS Opens</td>
									<td>
										<b>{projectInfo?.fcfs}</b>
									</td>
								</tr>
								<tr>
									<td>Closes</td>
									<td>
										<b>{projectInfo?.closeTime}</b>
									</td>
								</tr>
								<tr>
									<td>Swap Rate</td>
									<td>
										<b>{`1 ◎ = ${formatNumberDownRound(
											Number(idoInfo?.rate),
											0
										)} ${projectInfo?.symbol}`}</b>
									</td>
								</tr>
								<tr>
									<td>Cap</td>
									<td>
										<b>
											{formatNumberDownRound(
												Number(
													new BigNumber(idoInfo?.cap)
														.dividedBy(
															10 ** get(idoInfo, 'raiseTokenDecimals', 9)
														)
														.toString()
												),
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
												Number(
													new BigNumber(idoInfo?.participated)
														.dividedBy(
															10 ** get(idoInfo, 'raiseTokenDecimals', 9)
														)
														.toString()
												),
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
								{idoInfo?.rounds.map(
									(
										item: {
											name:
												| string
												| number
												| boolean
												| ReactElement<any, string | JSXElementConstructor<any>>
												| Iterable<ReactNode>
												| ReactPortal
												| null
												| undefined;
											durationSeconds:
												| string
												| number
												| boolean
												| ReactElement<any, string | JSXElementConstructor<any>>
												| Iterable<ReactNode>
												| ReactPortal
												| null
												| undefined;
										},
										index: Key | null | undefined
									) => (
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
									)
								)}
							</tbody>
						</table>
					</SolCard>
				</Col>
			</Row>
		</div>
	);
};
export default SolLaunchpadDetailPoolInfo;
