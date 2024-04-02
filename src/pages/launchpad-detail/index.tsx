import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { APP_ROUTES } from '../../constants';
import { useBlockLatest } from '../../hooks/useState';
import SolLaunchpadDetailMainContainer from './components/main.container';
import { getLaunchpadDetail } from './redux/actions';

const SolLaunchpadDetailPage: React.FC = () => {
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const blockNumber = useBlockLatest();

	useEffect(() => {
		if (!params) return navigate(APP_ROUTES.HOMEPAGE.path, { replace: true });
		const id = params.id;
		if (!id) return;
		dispatch(getLaunchpadDetail(id));
		//get project detail from api and pass it to the main container component
	}, [params, blockNumber]);

	return <SolLaunchpadDetailMainContainer />;
};
export default SolLaunchpadDetailPage;
