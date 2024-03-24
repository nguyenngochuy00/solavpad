import './index.scss';

type Props = {
	imageUrl?: string;
};

const SolBridgeImage = ({ imageUrl }: Props) => {
	return (
		<div className="sol-bridge-image">
			<img src={imageUrl} alt="" />
		</div>
	);
};
export default SolBridgeImage;
