import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Home
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/people"} className="nav-link">
              People
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/planets"} className="nav-link">
              Planets
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/starships"} className="nav-link">
              Starships
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/search"} className="nav-link">
              Search People
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
