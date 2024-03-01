import React from "react";
import logo from "../../../../images/valoraLogo.png";
import { NavLink } from "react-router-dom";
import "../../../../css/LogoModule.css";

const Logo = () => {

  return (
    <section className="logo_container">
        <NavLink>
          <img className="imgHeader" src={logo} alt="logo" />
        </NavLink>
    </section>
  );
};

export default Logo;