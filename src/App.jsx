import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      {/* <Register/> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </div>
  );
}

export default App;
