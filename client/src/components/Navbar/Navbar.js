import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const location = useLocation();

  return (
<<<<<<< HEAD
    <ul className="fixed-bottom-nav flex items-center list pl0">

      <li className="*">
        <Link to="../index.js/" className={location.pathname === "../index.js/" ? "nav-link active" : "nav-link"}>
=======
    <ul
      className="fixed-bottom-nav flex justify-center list pl0 pv3 mv0 fw6"
      style={{ backgroundColor: "blue" }}
    >
      <li className="ph3 link dim space white">
        {/* @todo font awesome icons for navbar <i className="fas fa-house-user"></i> */}
        <Link
          to="../index.js/"
          className={
            (location.pathname === "../index.js/"
              ? "nav-link active"
              : "nav-link",
            "link dim white")
          }
        >
>>>>>>> ab8e2842b4df4acafe2ee2d8373757c5777f8ea6
          Home
        </Link>
      </li>

      <li className="ph3">
        <Link
          to="/"
          className={
            (location.pathname === "/" ? "nav-link active" : "nav-link",
            "link dim white")
          }
        >
          Circle
        </Link>
      </li>

      <li className="ph3">
        <Link
          to="/"
          className={
            (location.pathname === "/" ? "nav-link active" : "nav-link",
            "link dim white")
          }
        >
          Update
        </Link>
      </li>

      <li className="ph3">
        <Link
          to="/"
          className={
            (location.pathname === "/" ? "nav-link active" : "nav-link",
            "link dim white")
          }
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
