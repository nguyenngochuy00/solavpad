import './index.scss';

type SolCheckpointProps = {
	checked?: boolean;
	title: string;
	description: string;
};

const SolCheckpoint: React.FC<SolCheckpointProps> = ({
	checked,
	title = '',
	description
}: SolCheckpointProps) => {
	return (
		<div className="sol-checkpoint">
			<div className="sol-checkpoint-icon">
				<img
					src={
						checked ? '/images/icons/avail.svg' : '/images/icons/not-avail.svg'
					}
					alt=""
				/>
			</div>
			<div className={`sol-checkpoint-info ${!description ? 'd-flex align-items-center' : ''}` }>
				<h5 className={description ? 'mb-1': ''}>{title}</h5>
				{description ? <div>{description}</div> : <></>}
			</div>
		</div>
	);
};
export default SolCheckpoint;
