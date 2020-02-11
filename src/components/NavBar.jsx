import React, { useState } from "react";
import { NavLink as NL } from "react-router-dom";
import "../styles/Nav.css";
import useWindowSize from "../configs/useWindowSize";
import banner from "../sources/images/banner2.png";
import Logo from "./Logo.jsx";
const NavBar = () => {
  const size = useWindowSize();
  const [open, setOpen] = useState(false);

  const shownav = () => {
    if (open === true) {
      setOpen(false);
      console.log("clicked");
    }
    if (open === false) {
      setOpen(true);
    }
  };

  return (
    <div className={open && size.width < 768 ? "mN full" : "mN"}>
      <div className="nLt">
        <span className="open" onClick={shownav}>
          {" "}
          <div className="logo">
            <div className="SWD">S</div>
            <div className="rest">kyler </div>
            <div className="SWD">W</div>
            <div className="e">e</div>
            <div className="b">b </div>
            <div className="SWD">D</div>
            <div className="rest">ev</div>
          </div>
        </span>
      </div>
      <div className={!open || size.width > 768 ? "nCt hidden" : "nCt"}></div>
      <div className={!open || size.width > 768 ? "nRt hidden" : "nRt"}>
        {/* <NL className="nL button" to='/logout'>Logout</NL>
            <NL className="nL button" to='#'>Register</NL> */}
        <NL className="nL" onClick={shownav} exact to="/">
          Home
        </NL>
        <NL className="nL" onClick={shownav} to="/portfolio">
          Portfolio
        </NL>
        <NL className="nL" onClick={shownav} to="/freelance">
          Freelance Services
        </NL>
      </div>
    </div>
  );
};

export default NavBar;
