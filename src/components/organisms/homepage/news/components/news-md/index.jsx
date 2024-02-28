import "./index.scss";

const SolHomepageNewsItemMd = ({ image, title, url, className }) => {
    return <div className={`sol-homepage-news-md ${className}`}>
        <a href={url} target="_blank" className="sol-homepage-news-md-title" rel="noreferrer">{title}</a>
        <img src={image} alt="" />
    </div>
}
export default SolHomepageNewsItemMd