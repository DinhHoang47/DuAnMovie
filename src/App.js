import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";
import LoginPage from "../pages/Login/LoginPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
