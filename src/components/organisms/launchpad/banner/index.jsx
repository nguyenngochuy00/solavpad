import { Col, Row } from 'react-bootstrap';
import SolPageTitle from 'src/components/molecules/page-title';
import SolStatistic from 'src/components/molecules/statistic';
import './index.scss';

const SolLaunchpadBanner = ({
	title,
	description,
	statistics = [],
	image
}) => {
	return (
		<div className="sol-launchpad-banner">
			<Row className="gx-lg-5 gy-4 align-items-center">
				<Col xl="6" lg="7" className='order-2 order-lg-1'>
					<SolPageTitle>{title}</SolPageTitle>
					<div className="sol-launchpad-banner-description">{description}</div>
					<div className="sol-launchpad-banner-statistics">
						{
							statistics.map((statistic, index) => (<SolStatistic
								key={index}
								value={statistic.value}
								label={statistic.label}
							/>))
						}
					</div>
				</Col>
				<Col xl="6" lg="5" className='order-1 order-lg-2 text-center'>
					{image ? <img className="img-fluid" src={image} alt="" /> : <></>}
				</Col>
			</Row>
		</div>
	);
};
export default SolLaunchpadBanner;
