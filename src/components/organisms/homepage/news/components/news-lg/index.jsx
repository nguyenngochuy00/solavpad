import "./index.scss";

const SolHomepageNewsItemLg = ({ image, title, description, url }) => {
    return <div className="sol-homepage-news-lg" style={{ backgroundImage: `url(${image})` }}>
        <div className="sol-homepage-news-lg-body">
            <a href={url} target="_blank" className="sol-homepage-news-lg-title" rel="noreferrer">{title}</a>
            <div className="sol-homepage-news-lg-description">{description}</div>
        </div>
    </div>
}
export default SolHomepageNewsItemLg