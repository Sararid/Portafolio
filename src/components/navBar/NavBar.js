import React from "react";
import { Outlet, Link } from "react-router-dom";
//style
import "./NavBar.scss";

function NavBar() {
  return (
    <header>
      <nav className="navContainer">
        <ul className="navContainer__list">
          <li>
            <Link className="navContainer__list--el" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navContainer__list--el" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="navContainer__list--el" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </header>
  );
}

export default NavBar;
