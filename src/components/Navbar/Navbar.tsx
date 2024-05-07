import {Link} from "react-router-dom";
import styles from "./Navbar.module.scss"
import React from "react";
import logo from "../../img/logo.svg"

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <Link to="/"><img src={logo} alt="Logo"/></Link>
            <ul>
                <li>
                    <Link to="/aufgabe-1">Aufgabe 1</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;