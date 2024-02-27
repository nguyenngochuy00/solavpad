import "./index.scss";

const SolHomepageNewsItemMd = ({ image, title, url }) => {
    return <div className="sol-homepage-news-md">
        <a href={url} target="_blank" className="sol-homepage-news-md-title" rel="noreferrer">{title}</a>
        <img src={image} alt="" />
    </div>
}
export default SolHomepageNewsItemMd