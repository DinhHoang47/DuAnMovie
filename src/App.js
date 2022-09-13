import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import Layout from "./layout/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/detail-movie/:id"
            element={<Layout Component={DetailMovie} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
