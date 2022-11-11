import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import { Login, Home, Register, Error } from "./components";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.setItem(
      "userdata",
      JSON.stringify([
        {
          username: "admin",
          email: "admin@admin.com",
          password: "admin",
        },
      ])
    );
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* routes that need to be protected were passed inside this nested route */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
