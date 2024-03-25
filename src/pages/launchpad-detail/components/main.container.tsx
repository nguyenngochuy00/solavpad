import { useState, useEffect } from 'react';
import SolLaunchpadDetailDescriptionContainer from './description.container';
import SolLaunchpadDetailPoolCardContainer from './pool-card.container';
import SolLaunchpadDetailPoolInfoContainer from './pool-info.container';
import SolLaunchpadDetailSummaryContainer from './summary.container';
import SolLaunchpadDetailTekenMetricsContainer from './token-metrics.container';
import SolLaunchpadDetailYourAllocationContainer from './your-allocation.container';
import { useNavigate, useParams } from 'react-router-dom';
import { find } from 'lodash';
import projects from '../../../constants/project/project.json';
import SolLaunchpadDetailTabs from '../../../components/organisms/launchpad-detail/tabs';
import SolLaunchpadDetailTemplate from '../../../components/templates/launchpad-detail';
import { APP_ROUTES } from '../../../constants';
import { IdoInfoType, ProjectDetail, TabType } from '../../../types';
import { getProjectDetail } from '../../../services/blockchain/solana.web3';

const SolLaunchpadDetailMainContainer: React.FC = () => {
	const navigate = useNavigate();
	const params = useParams();
	const [showJoinModal, setShowJoinModal] = useState<boolean>(false);
	const [showApproveModal, setShowApproveModal] = useState<boolean>(false);
	const [projectInfo, setProjectInfo] = useState<ProjectDetail | undefined>(undefined);
	const [idoInfo, setIdoInfo] = useState<IdoInfoType | undefined>(undefined);

	useEffect(() => {
		if (String(params?.id).trim().length > 0) {
			getIDODetail();
			// TO-DO: fake get project info, call api later
			getProjectInfo(params?.id);
		} else {
			navigate(APP_ROUTES.HOMEPAGE.path, { replace: true });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params?.id]);

	const getProjectInfo = (projectId: string | number | undefined  ) => {
		if(!projectId) {
			return;
		}
		// eslint-disable-next-line eqeqeq
		const data = find(projects?.data, item => item.id === projectId);
		setProjectInfo(data);
	};

	const getIDODetail = async () => {
		debugger
		console.log("projectInfo", projectInfo);
		
		if(!projectInfo?.contract) return
		const data = await getProjectDetail(projectInfo?.contract);
		setIdoInfo(data);
	};

	const TABS: TabType[] = [
		{ key: 'Description', text: 'Description' },
		{ key: 'PoolInfo', text: 'Pool Info' },
		{ key: 'TokenMetrics', text: 'TokenMetrics' },
		{ key: 'YourAllocation', text: 'Your Allocation' }
	];
	const [activeTab, setActiveTab] = useState<string>(TABS[1].key);
	const MOCKDATA = {
		poolInfo: {
			name: 'Cryptopolis (Blue Diamond Private)',
			symbol: 'CPO',
			opens: '01-31 09:01 UTC',
			fcfsOpens: '01-31 13:46 UTC',
			closes: '01-31 15:01 UTC',
			swapRate: '1 BUSD = 125.0000 CPO',
			cap: '100,000 BUSD',
			totalUsersParticipated: 243,
			totalFundsSwapped: '100,095.8583 BUSD',
			accessType: 'Private',
			schedule: [
				{
					round: 'Allocation',
					opens: '2021-10-18 08:00:00 UTC',
					closes: '2021-10-18 08:00:00 UTC'
				},
				{
					round: 'FCFS - Prepare',
					opens: '2021-10-18 08:00:00 UTC',
					closes: '2021-10-18 08:00:00 UTC'
				},
				{
					round: 'FCFS - Prepare',
					opens: '2021-10-18 08:00:00 UTC',
					closes: '2021-10-18 08:00:00 UTC'
				}
			]
		},
		tokenMetrics: {
			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [
				{
					label: '# of Votes',
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'#e250e5',
						'#8350e6',
						'#4b50e6',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderColor: [
						'rgba(255, 255, 255, 0.1)',
						'rgba(255, 255, 255, 0.1)',
						'rgba(255, 255, 255, 0.1)',
						'rgba(255, 255, 255, 0.1)',
						'rgba(255, 255, 255, 0.1)',
						'rgba(255, 255, 255, 0.1)'
					],
					borderWidth: 1
				}
			]
		},
		allocations: [
			{
				value: '9.9999 BUSD',
				percent: '1.00%',
				claimed: '0.9999 BUSD',
				time: '21-10-25 15:00 to 22-08-25 15:00'
			},
			{
				value: '9.9999 BUSD',
				percent: '1.00%',
				claimed: '0.9999 BUSD',
				time: '21-10-25 15:00 to 22-08-25 15:00'
			},
			{
				value: '9.9999 BUSD',
				percent: '1.00%',
				claimed: '0.9999 BUSD',
				time: '21-10-25 15:00 to 22-08-25 15:00'
			},
			{
				value: '9.9999 BUSD',
				percent: '1.00%',
				claimed: '0.9999 BUSD',
				time: '21-10-25 15:00 to 22-08-25 15:00'
			}
		]
	};

	const handleTabChange = (tabKey: string) => {
		setActiveTab(tabKey);
	};

	return (
		<SolLaunchpadDetailTemplate
			summary={<SolLaunchpadDetailSummaryContainer data={projectInfo} />}
			poolCard={<SolLaunchpadDetailPoolCardContainer />}
			tabs={
				<SolLaunchpadDetailTabs
					tabs={TABS}
					activeTab={activeTab}
					onTabChange={handleTabChange}
				/>
			}
			details={
				<>
					{activeTab === TABS[0].key ? (
						<SolLaunchpadDetailDescriptionContainer />
					) : (
						<></>
					)}
					{activeTab === TABS[1].key ? (
						<SolLaunchpadDetailPoolInfoContainer
							idoInfo={idoInfo}
							projectInfo={projectInfo}
						/>
					) : (
						<></>
					)}
					{activeTab === TABS[2].key ? (
						<SolLaunchpadDetailTekenMetricsContainer data={MOCKDATA.tokenMetrics} />
					) : (
						<></>
					)}
					{activeTab === TABS[3].key ? (
						<SolLaunchpadDetailYourAllocationContainer
							data={MOCKDATA.allocations}
							claimable={false}
						/>
					) : (
						<></>
					)}
				</>
			}
		/>
	);
};
export default SolLaunchpadDetailMainContainer;
