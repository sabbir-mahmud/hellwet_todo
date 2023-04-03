import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import RequireUser from "./components/Auth/RequireAuth";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireUser>
              <Home />
            </RequireUser>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </section>
  );
}

export default App;
