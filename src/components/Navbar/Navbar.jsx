import React from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import "./style.css";

const NavBar = ({ user, handleLogout }) => (
  <div className="navbar">
    <div className="navbar__title">
      <h3 className="brand">
        My<span className="spann">Blog</span>App
      </h3>
    </div>
    <Nav user={user} handleLogout={handleLogout} />
    <MobileNav />
  </div>
);

export default NavBar;
