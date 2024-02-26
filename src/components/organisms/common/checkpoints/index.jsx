import SolCheckpoint from 'src/components/molecules/checkpoint';
import './index.scss';

const SolCheckpoints = ({ checkpoints = [] }) => {
	return (
		<div className="sol-checkpoints">
			{
				checkpoints.map((checkpoint, index) => (
					<SolCheckpoint
						key={index}
						checked={checkpoint.checked}
						title={checkpoint.title}
						description={checkpoint.description}
					/>
				))
			}
		</div>
	);
};
export default SolCheckpoints;
