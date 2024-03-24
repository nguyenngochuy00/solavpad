import SolCheckpoint from '../../../molecules/checkpoint';
import './index.scss';

type Checkpoint = {
	checked?: boolean;
	title?: string;
	description?: string;
};

type Props = {
	checkpoints?: Checkpoint[];
};

const SolCheckpoints = ({ checkpoints = [] }: any) => {
	return (
		<div className="sol-checkpoints">
			{checkpoints.map((checkpoint: any, index: any) => (
				<SolCheckpoint
					key={index}
					checked={checkpoint.checked}
					title={checkpoint.title}
					description={checkpoint.description}
				/>
			))}
		</div>
	);
};
export default SolCheckpoints;
