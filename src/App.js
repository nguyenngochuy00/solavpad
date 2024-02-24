import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import { WalletContext } from "./components/wallet-context";
import store from "./redux/store/store";
import AppRoutes from "./routes";
import "./styles/base.scss";
import SolHeader from "./components/organisms/common/header";
import SolSidebar from "./components/organisms/common/sidebar";

const App = () => {
  return (
    <>
      <SolSidebar />
      <main className="sol-main">
        <SolHeader />
        <WalletContext>
          <Provider store={store}>
            <Router>
              <AppRoutes />
            </Router>
            <ToastContainer />
          </Provider>
        </WalletContext>
      </main>
    </>
  );
};

export default App;
