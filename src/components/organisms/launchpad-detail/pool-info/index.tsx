import { BigNumber } from 'bignumber.js';
import { get } from 'lodash';
import moment from 'moment';
import { Col, Row } from 'react-bootstrap';
import { formatNumberDownRound } from '../../../../services/helpers/helpers';
import { IdoInfoType, ProjectDetail, RoundItem } from '../../../../types';
import SolCard from '../../../molecules/card';
import './index.scss';
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from 'react';
import { idoService, solaUtils } from '../../../../services/blockchain';


interface SolLaunchpadDetailPoolInfoProps {
	projectInfo: ProjectDetail | undefined;
}

const SolLaunchpadDetailPoolInfo = ({projectInfo}: SolLaunchpadDetailPoolInfoProps) => {

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
											{moment(
												new Date(
													(projectInfo?.openTimestamp || 0) * 1000
												).toLocaleString()
											)
												.utc()
												.format('YYYY-MM-DD HH:mm:ss [UTC]')}
										</b>
									</td>
								</tr>
								<tr>
									<td>FCFS Opens</td>
									<td>
										<b>
											{moment(
												new Date(
													(Number(projectInfo?.fcfsOpenTime) || 0) * 1000
												).toLocaleString()
											)
												.utc()
												.format('YYYY-MM-DD HH:mm:ss [UTC]')}
										</b>
									</td>
								</tr>
								<tr>
									<td>Closes</td>
									<td>
										<b>
											{moment(
												new Date(
													(projectInfo?.closeTimestamp || 0) * 1000
												).toLocaleString()
											)
												.utc()
												.format('YYYY-MM-DD HH:mm:ss [UTC]')}
										</b>
									</td>
								</tr>
								<tr>
									<td>Swap Rate</td>
									<td>
										<b>{`1 ${projectInfo?.symbol} = ${formatNumberDownRound(
											Number(projectInfo?.rate || 0),
											0
										)} ${projectInfo?.projectTokenSymbol}`}</b>
									</td>
								</tr>
								<tr>
									<td>Cap</td>
									<td>
										<b>
											{formatNumberDownRound(
												Number(
													new BigNumber(projectInfo?.cap)
														.dividedBy(
															10 ** get(projectInfo, 'raiseTokenDecimals', 9)
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
													new BigNumber(projectInfo?.participated)
														.dividedBy(
															10 ** get(projectInfo, 'raiseTokenDecimals', 9)
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
										<b>{projectInfo?.totalFundParticipated}</b>
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
										<b>{projectInfo?.projectTokenSymbol}</b>
									</td>
								</tr>
							</tbody>
						</table>
					</SolCard>

					<SolCard title="Schedule">
						<table>
							<tbody>
								{projectInfo?.rounds &&
									projectInfo?.rounds.map((item: RoundItem, index: number) => (
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
