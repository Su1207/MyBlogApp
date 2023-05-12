import React, { useState } from "react";
import Navlinks from "./Navlinks";
import "./style.css";
import { CgCloseR } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const openButton = (
    <TiThMenu
      className="hamburger-menu"
      size="30px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeButton = (
    <CgCloseR
      className="hamburger-menu"
      size="30px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <nav className="MobileNav">
      {open ? closeButton : openButton}
      {open && <Navlinks />}
    </nav>
  );
};

export default MobileNav;
