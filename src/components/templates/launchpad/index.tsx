import './index.scss';

type SolLaunchpadTemplateProps = {
	banner: JSX.Element;
	section1: JSX.Element;
	section2: JSX.Element;
	section3: JSX.Element;
};

const SolLaunchpadTemplate = ({
	banner,
	section1,
	section2,
	section3
}: SolLaunchpadTemplateProps) => {
	return (
		<div className="sol-launchpad-template">
			{banner}
			{section1 ? (
				<div className="sol-launchpad-section">{section1}</div>
			) : (
				<></>
			)}
			{section2 ? (
				<div className="sol-launchpad-section">{section2}</div>
			) : (
				<></>
			)}
			{section3 ? (
				<div className="sol-launchpad-section">{section3}</div>
			) : (
				<></>
			)}
		</div>
	);
};
export default SolLaunchpadTemplate;
