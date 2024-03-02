import SolLaunchpadDetailPoolInfo from 'src/components/organisms/launchpad-detail/pool-info';

const SolLaunchpadDetailPoolInfoContainer = ({ data }) => {
	console.log('laaaaaaaaa', data);
	return <SolLaunchpadDetailPoolInfo poolData={data} />;
};
export default SolLaunchpadDetailPoolInfoContainer;
