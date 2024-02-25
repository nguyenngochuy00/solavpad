import { CarouselCaption } from 'react-bootstrap';
import SolProgressBar from '.';

function SolProgressBarSample() {
	return (
		<div className="sol-progress-bar-outer">
			<SolProgressBar size="medium" percent={20000 / 739} />
			<SolProgressBar size="lg" percent={46400 / 739} />
		</div>
	);
}

export default SolProgressBarSample;
