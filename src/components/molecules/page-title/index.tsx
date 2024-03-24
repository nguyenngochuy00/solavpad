import './index.scss';

type Props = {
	children?: JSX.Element;
};

const SolPageTitle = ({ children }: any) => {
	return <div className="sol-page-title">{children}</div>;
};
export default SolPageTitle;
