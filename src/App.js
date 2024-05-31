import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Register from "./pages/Register";
import UserContext from "./pages/UserContext";
import axios from "axios";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5001/user", { withCredentials: true })
      .then((response) => {
        setEmail(response.data.email);
      });
  }, []);

  function logout() {
    axios
      .post("http://localhost:5001/logout", {}, { withCredentials: true })
      .then(() => setEmail(""));
  }

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          {!email && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          {!!email && (
            <a
              href="/logout"
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}>
              Logout
            </a>
          )}
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
