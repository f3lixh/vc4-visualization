import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import React from "react";
import logo from "../../img/logo.svg";

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <NavLink to="/"><img src={logo} alt="Logo"/></NavLink>
            <ul>
                <li>
                    <NavLink
                        to="/aufgabe-1"
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        Aufgabe 1
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/aufgabe-2"
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        Präattentive Verarbeitung
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
