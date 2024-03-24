import './index.scss';

type SolHomepageTemplateProps = {
	children: JSX.Element;
};

const SolHomepageTemplate = ({ children }: SolHomepageTemplateProps) => {
	return <div className="sol-homepage-template">{children}</div>;
};
export default SolHomepageTemplate;
