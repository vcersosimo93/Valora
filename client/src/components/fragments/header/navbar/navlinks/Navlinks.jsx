import React from "react";
import { NavLink } from "react-router-dom";
import "../../../../../css/NavLinksModule.css";

const Navlinks = () => {
    /*   
    const userLogged = AuthenticationService.isUserLoggedIn();
    const businessLogged = AuthenticationService.isBusinessLoggedIn();
    const location = useLocation();
  */

    return (
        <>
            <ul className="nav_links">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Inspeccion">Inspeccion</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/orden">Orden</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Discover</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Logout</a>
                </li>
            </ul>


        </>
    );
};

export default Navlinks;
