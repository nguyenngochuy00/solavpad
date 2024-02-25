import { Link } from 'react-router-dom';
import './index.scss';

const SolBreadcrumb = ({ items = [] }) => {
	return (
		<div className="sol-breadcrumb">
			<Link className='sol-breadcrumb-home' to="/">
				<img src="/images/icons/home.svg" alt="" />
			</Link>
			{
				items.map((item, index) => <span key={index} className='sol-breadcrumb-item'>
					<span className='sol-breadcrumb-decoration'>/</span>
					{
						item.active ?
							<span className='sol-breadcrumb-item-active'>{item.text}</span> :
							<Link className='sol-breadcrumb-item-link' to={item.url}>
								{item.text}
							</Link>
					}
				</span>)
			}
		</div>
	);
};
export default SolBreadcrumb;
