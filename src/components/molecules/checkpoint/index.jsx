import './index.scss';

const SolCheckpoint = ({ checked = '', title = '', description }) => {
	return (
		<div className="sol-checkpoint">
			<div className="sol-checkpoint-icon">
				<img src={checked ? '/images/icons/avail.svg' : '/images/icons/not-avail.svg'} alt="" />
			</div>
			<div className="sol-checkpoint-info">
				<h5>{title}</h5>
				<div>{description}</div>
			</div>
		</div>
	);
};
export default SolCheckpoint;
