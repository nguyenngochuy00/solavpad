import { BigNumber } from 'bignumber.js';
import { get } from 'lodash';
import moment from 'moment';
import { Col, Row } from 'react-bootstrap';
import { formatNumberDownRound } from '../../../../services/helpers/helpers';
import {
	IdoInfoType,
	ProjectDetail,
	RoundInfo,
	RoundItem
} from '../../../../types';
import SolCard from '../../../molecules/card';
import './index.scss';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import { idoService, solaUtils } from '../../../../services/blockchain';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux/rootReducer';

const SolLaunchpadDetailPoolInfo = () => {
	const projectSelected = useSelector(
		(state: AppState) => state.launchpadDetail.launchpad
	);
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
											{moment
												.unix(Number(projectSelected?.openTimestamp))
												.utc()
												.format('YYYY-MM-DD HH:mm:ss [UTC]')}
										</b>
									</td>
								</tr>
								<tr>
									<td>FCFS Opens</td>
									<td>
										<b>
											{moment
												.unix(Number(projectSelected?.fcfsTimestamp))
												.utc()
												.format('YYYY-MM-DD HH:mm:ss [UTC]')}
										</b>
									</td>
								</tr>
								<tr>
									<td>Closes</td>
									<td>
										<b>
											{moment
												.unix(Number(projectSelected?.closeTimestamp))
												.utc()
												.format('YYYY-MM-DD HH:mm:ss [UTC]')}
										</b>
									</td>
								</tr>
								<tr>
									<td>Swap Rate</td>
									<td>
										<b>{`1 ${projectSelected?.symbol} = ${formatNumberDownRound(
											Number(projectSelected?.rate || 0),
											6
										)} ${projectSelected?.projectTokenSymbol}`}</b>
									</td>
								</tr>
								<tr>
									<td>Cap</td>
									<td>
										<b>
											{formatNumberDownRound(
												projectSelected?.cap,
												projectSelected?.raiseTokenDecimals
											)}{' '}
											{projectSelected?.symbol}
										</b>
									</td>
								</tr>
								<tr>
									<td>Total Users Participated</td>
									<td>
										<b>{projectSelected?.participatedCount}</b>
									</td>
								</tr>
								<tr>
									<td>Total Funds Swapped</td>
									<td>
										<b>
											{' '}
											{formatNumberDownRound(
												projectSelected?.participated,
												projectSelected?.raiseTokenDecimals
											)}{' '}
											{projectSelected?.symbol}
										</b>
									</td>
								</tr>
								<tr>
									<td>Access Type</td>
									<td>
										<b>{projectSelected?.isPrivate ? 'Private' : 'Public'}</b>
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
										<b>{projectSelected?.name}</b>
									</td>
								</tr>
								<tr>
									<td>Token Symbol</td>
									<td>
										<b>{projectSelected?.projectTokenSymbol}</b>
									</td>
								</tr>
							</tbody>
						</table>
					</SolCard>

					<SolCard title="Schedule">
						<table>
							<tbody>
								{projectSelected?.infoRounds?.length &&
									projectSelected?.infoRounds.map(
										(item: RoundInfo, index: number) => (
											<tr key={index}>
												<td>
													<b>{item.round}</b>
												</td>
												<td>
													<div>
														<span>Opens:</span>
														<b>{item.opens}</b>
													</div>
													<div>
														<span>Closes:</span>
														<b>{item.closes}</b>
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
