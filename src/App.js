import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WalletContext } from "./components/wallet-context";
import store from "./redux/store/store";
import AppRoutes from "./routes";
import "./styles/base.scss";

const App = () => {
  return (
    <>
      <WalletContext>
        <Provider store={store}>
          <Router>
            <AppRoutes />
          </Router>
          <ToastContainer />
        </Provider>
      </WalletContext>
    </>
  );
};

export default App;
