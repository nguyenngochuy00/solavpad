import { Link } from 'react-router-dom';
import './index.scss';

type Props = {
	siteUrl?: string;
	siteTitle?: string;
	logoImage?: string;
	onClick?: () => void;
};

const SolLogo = ({
	siteUrl = '/',
	siteTitle = '',
	logoImage,
	onClick
}: Props) => {
	return (
		<Link to={siteUrl} className="sol-logo" onClick={onClick}>
			<div className="sol-logo-image">
				<img src={logoImage} alt={siteTitle} />
			</div>
			{siteTitle ? <span>{siteTitle}</span> : <></>}
		</Link>
	);
};
export default SolLogo;
