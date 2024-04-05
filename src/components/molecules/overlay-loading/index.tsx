import { Spinner } from 'react-bootstrap';
import './index.scss';


interface OverlayLoadingProps {
    loading: boolean;
}

const OverlayLoading = ({ loading }: OverlayLoadingProps) => {
	return (
		<div className={`sol-overlay ${loading ? 'show' : ''}`}>
            <div className='sol-overlay-content'>
                <div>
                    <h2>Processing your transaction</h2>
                    <p>This may take a while. So please be patient <br/> Do not close the window or refresh the page during this process</p>
                </div>

                <Spinner animation="border" variant="light" />
            </div>
			
		</div>
	);
};

export default OverlayLoading;
