import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Home, Register, Error } from "./components";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
