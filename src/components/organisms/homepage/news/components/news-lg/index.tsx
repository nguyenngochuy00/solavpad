import './index.scss';

type Props = {
	image?: string;
	title?: string;
	description?: string;
	url?: string;
};

const SolHomepageNewsItemLg = ({ image, title, description, url }: Props) => {
	return (
		<div
			className="sol-homepage-news-lg"
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className="sol-homepage-news-lg-body">
				<a
					href={url}
					target="_blank"
					className="sol-homepage-news-lg-title"
					rel="noreferrer"
				>
					{title}
				</a>
				<div className="sol-homepage-news-lg-description">{description}</div>
			</div>
		</div>
	);
};
export default SolHomepageNewsItemLg;
