import './index.scss';

const SolBreadcrumb = ({ items = '' }) => {
	return (
		<div className="sol-breadcrumb">
			<button type="button">
				{items ? <span className="sol-items">{items}</span> : <></>}
			</button>

			<p>/</p>
			<span className="sol-name">Breadcrumb</span>
			<p>/</p>
			<span className="sol-name-two">#Breadcrumb</span>
		</div>
	);
};
export default SolBreadcrumb;
