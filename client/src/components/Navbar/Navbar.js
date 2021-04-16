import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faVirus } from "@fortawesome/free-solid-svg-icons";

//Font awesome icons
const element = <FontAwesomeIcon icon={faHouseUser} />
const elementb = <FontAwesomeIcon icon={faCircleNotch} />
const elementc = <FontAwesomeIcon icon={faEdit} />
const elementd = <FontAwesomeIcon icon={faVirus} /> 

function NavBar() {
  const location = useLocation();

  return (
    <ul
      className="fixed-bottom-nav flex justify-center list pl0 pv3 mv0 fw6"
      style={{ backgroundColor: "blue" }}
    >
      <li className="ph3 link dim space white">
        
        <Link
          to="../index.js/"
          className={
            (location.pathname === "../index.js/"
              ? "nav-link active"
              : "nav-link",
            "link dim white")
          }
        >
          {element} Home
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
          {elementb} Circle
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
          {elementc} Update
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
          {elementd} Covid Status
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
