import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WalletContext } from './components/wallet-context';
import { store } from './redux/store';
import AppRoutes from './routes';
import './styles/base.scss';
import AppUpdater from './hooks/updater';

const App = () => {
	return (
		<>
			<Provider store={store}>
				<WalletContext>
					
					<>
						<AppUpdater/>
						<Router>
							<AppRoutes />
						</Router>
						<ToastContainer />
					</>
				</WalletContext>
			</Provider>
		</>
	);
};

export default App;
