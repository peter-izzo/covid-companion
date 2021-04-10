import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css"

function NavBar() {
    
  const location = useLocation();

  return (
    <ul className="fixed-bottom-nav flex items-center list pl0">

      <li className="*">
        <Link to="../index.js/" className={location.pathname === "../index.js/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>

      <li className="*">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Circle
        </Link>
      </li>

      <li className="*">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Update
        </Link>
      </li>

      <li className="*">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Covid Status
        </Link>
      </li>

    {/*<li className="*">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Lorem Ipsum
        </Link>
      </li> */}

    </ul>
  );
}

export default NavBar;