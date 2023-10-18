import React, { useEffect, useState } from "react";
import "./App.css";
// import "./style.scss";
import Blog from "./pages/Blog/Blog";
import Index from "./pages/Home/Index";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import About from "./pages/About/About";
import Notfound from "./pages/Notfound";
import Auth from "./pages/Auth";
import { auth } from "./fireBase";
import { useNavigate, Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import AddEditBlogs from "./pages/AddEditBlogs/AddEditBlogs";

function App() {
  const [active, setActive] = useState("Home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("About");
      navigate("/");
    });
  };

  return (
    <div className="container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<About />} />
        <Route
          path="/create"
          element={
            user?.uid ? <AddEditBlogs user={user} /> : <Navigate to="/home" />
          }
        />
        <Route path="/blog/:id" element={<Blog setActive={setActive} />} />
        <Route path="/signIn" element={<Auth setActive={setActive} />} />
        {/* <Route path="/signup" element={<Auth />} /> */}
        <Route
          path="/home"
          element={<Index user={user} handleLogout={handleLogout} />}
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
