import React from "react";
import "../../../../css/NavBarModule.css";
import NavLinks from "./navlinks/Navlinks.jsx";


const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLinks />
    </nav>
  );
};

export default Navbar;
