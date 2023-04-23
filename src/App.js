import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpScreen from "./screens/SignUpScreen";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/sign_up" element={<SignUpScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
