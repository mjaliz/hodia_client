import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import CurrenciesScreen from "./screens/CurrenciesScreen";
import CurrencyPriceScreen from "./screens/CurrencyPriceScreen";
import ChartScreen from "./screens/ChartScreen";

function App() {
  return (
    <div className="container vh-100">
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/sign_up" element={<SignUpScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/currencies" element={<CurrenciesScreen />} />
          <Route
            exact
            path="/currencies/:currency_id"
            element={<CurrencyPriceScreen />}
          />
          <Route exact path="/chart" element={<ChartScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
