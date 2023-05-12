import React from "react";
import Navlinks from "./Navlinks";
import "./style.css";

const Nav = ({ user, handleLogout }) => {
  return (
    <nav className="Nav">
      <Navlinks user={user} handleLogout={handleLogout} />
    </nav>
  );
};

export default Nav;
