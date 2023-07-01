import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import RequireUser from "./components/Auth/RequireAuth";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import UpdateProfile from "./components/Profile/UpdateProfile";

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/update/:email" element={<UpdateProfile />} />
      </Routes>
      <ToastContainer />
    </section>
  );
}

export default App;
