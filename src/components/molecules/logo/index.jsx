import { Link } from "react-router-dom";
import "./index.scss";

const SolLogo = ({ siteUrl = '/', siteTitle = '', logoImage, onClick }) => {
    return <Link to={siteUrl} className="sol-logo" onClick={onClick}>
        <div className="sol-logo-image">
            <img src={logoImage} alt={siteTitle} />
        </div>
        {siteTitle ? <span>{siteTitle}</span> : <></>}
    </Link>
}
export default SolLogo