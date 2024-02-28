import { Col, Row } from "react-bootstrap";
import SolPageTitle from "../../../molecules/page-title";
import "./index.scss";

const SolHomepageBanner = ({ title, description, actions, image }) => {
    return <div className="sol-homepage-banner">
        <Row className="align-items-center gy-4">
            <Col lg="6" className="order-2 order-lg-1">
                <SolPageTitle>{title}</SolPageTitle>
                <div className="sol-homepage-banner-description">{description}</div>
                <div className="sol-homepage-banner-action">{actions}</div>
            </Col>
            <Col lg="6" className="order-1 order-lg-2 text-center">
                <img src={image} className="img-fluid" alt="" />
            </Col>
        </Row>
    </div>
}
export default SolHomepageBanner