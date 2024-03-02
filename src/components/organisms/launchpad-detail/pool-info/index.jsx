import { Col, Row } from 'react-bootstrap';
import SolCard from 'src/components/molecules/card';
import './index.scss';

const SolLaunchpadDetailPoolInfo = ({ poolData }) => {
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
										<b>{poolData?.opens}</b>
									</td>
								</tr>
								<tr>
									<td>FCFS Opens</td>
									<td>
										<b>{poolData.fcfsOpens}</b>
									</td>
								</tr>
								<tr>
									<td>Closes</td>
									<td>
										<b>{poolData.closes}</b>
									</td>
								</tr>
								<tr>
									<td>Swap Rate</td>
									<td>
										<b>{poolData.swapRate}</b>
									</td>
								</tr>
								<tr>
									<td>Cap</td>
									<td>
										<b>{poolData.cap}</b>
									</td>
								</tr>
								<tr>
									<td>Total Users Participated</td>
									<td>
										<b>{poolData.totalUsersParticipated}</b>
									</td>
								</tr>
								<tr>
									<td>Total Funds Swapped</td>
									<td>
										<b>{poolData.totalFundsSwapped}</b>
									</td>
								</tr>
								<tr>
									<td>Access Type</td>
									<td>
										<b>{poolData.accessType}</b>
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
										<b>{poolData.name}</b>
									</td>
								</tr>
								<tr>
									<td>Token Symbol</td>
									<td>
										<b>{poolData.symbol}</b>
									</td>
								</tr>
							</tbody>
						</table>
					</SolCard>

					<SolCard title="Schedule">
						<table>
							<tbody>
								{poolData.schedule.map((item, index) => (
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
