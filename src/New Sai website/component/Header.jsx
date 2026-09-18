import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import logo from "../../assets/Sailogo.png";

function Header() {
  return (
    <header className={style["header"]}>
      <div className={style["container"]}>

        {/* Logo */}
        <div className={style["logo-section"]}>
          <img src={logo} alt="Logo" className={style["logo-img"]} />
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className={style["nav-menu"]}>
            <li>
              <Link to="/">HOME</Link>
            </li>

            <li>
              <Link to="/features">FEATURES</Link>
            </li>

            <li>
              <Link to="/about">ABOUT</Link>
            </li>

            <li>
              <Link to="/services">SERVICES</Link>
            </li>

            <li>
              <Link to="/Blogs">BLOGS</Link>
            </li>

            <li>
              <Link to="/gallery">GALLERY</Link>
            </li>

            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;