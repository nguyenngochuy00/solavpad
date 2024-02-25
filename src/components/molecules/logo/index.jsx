import { Link } from "react-router-dom";
import "./index.scss";

const SolLogo = ({ siteUrl = '/', siteTitle = '', logoImage, expanded = true }) => {
    return <Link to={siteUrl} className="sol-logo">
        <div className="sol-logo-image">
            <img src={logoImage} alt={siteTitle} />
        </div>
        {expanded ? <span>{siteTitle}</span> : <></>}
    </Link>
}
export default SolLogo