import { Col, Row } from "react-bootstrap";
import SolHomepageNewsItemLg from './components/news-lg';
import SolHomepageNewsItemMd from './components/news-md';
import "./index.scss";

const SolHomepageNews = ({ sectionTitle, news = [] }) => {
    return news.length ? <div className="sol-homepage-news">
        {sectionTitle ? <h2 className="sol-homepage-news-title">{sectionTitle}</h2> : <></>}
        <Row>
            <Col xxl="8" lg="7">
                <SolHomepageNewsItemLg
                    url={news[0].url}
                    image={news[0].image}
                    title={news[0].title}
                    description={news[0].description}
                />
            </Col>
            <Col xxl="4" lg="5">
                <Row>
                    <Col lg="12" md="6">
                        {news.length > 1 ? <SolHomepageNewsItemMd
                            url={news[1].url}
                            image={news[1].image}
                            title={news[1].title}
                        /> : <></>}
                    </Col>
                    <Col lg="12" md="6">
                        {news.length > 2 ? <SolHomepageNewsItemMd
                            url={news[2].url}
                            image={news[2].image}
                            title={news[2].title}
                            className="last"
                        /> : <></>}
                    </Col>
                </Row>
            </Col>
        </Row>
    </div> : <></>
}
export default SolHomepageNews