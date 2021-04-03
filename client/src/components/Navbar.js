import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    
  const location = useLocation();

  return (
    <ul className="*">

      <li className="*">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Lorem Ipsum
        </Link>
      </li>

      <li className="*">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Lorem Ipsum
        </Link>
      </li>

      <li className="*">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Lorem Ipsum
        </Link>
      </li>

      <li className="*">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Lorem Ipsum
        </Link>
      </li>

      <li className="*">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Lorem Ipsum
        </Link>
      </li>

    </ul>
  );
}

export default NavTabs;