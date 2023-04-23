import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/sign_up" element={<SignUpScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
