import './index.scss';

type Props = {
	image?: string;
	title?: string;
	url?: string;
	className?: string;
};

const SolHomepageNewsItemMd = ({ image, title, url, className }: Props) => {
	return (
		<div className={`sol-homepage-news-md ${className}`}>
			<a
				href={url}
				target="_blank"
				className="sol-homepage-news-md-title"
				rel="noreferrer"
			>
				{title}
			</a>
			<img src={image} alt="" />
		</div>
	);
};
export default SolHomepageNewsItemMd;
