import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { faViruses } from "@fortawesome/free-solid-svg-icons";
// import { faMap } from "@fortawesome/free-solid-svg-icons";

//Font awesome icons
const element = <FontAwesomeIcon icon={faHouseUser} className="f2 pv2" />;
const elementb = <FontAwesomeIcon icon={faSearchPlus} className="f2 pv2" />;
const elementc = <FontAwesomeIcon icon={faViruses} className="f2 pv2" />;
// const elementd = <FontAwesomeIcon icon={faMap} />;

function NavBar() {
  const location = useLocation();

  return (
    <ul
      className="fixed-bottom-nav flex justify-center list pv2 mv0 fw6"
      style={{ backgroundColor: "blue" }}
      id="navbar"
    >
      {/* Add to Circle Link/Search for friends */}
      <li className=" f6  ph3 ">
        <Link
          to="/search"
          className={
            (location.pathname === "/search" ? "nav-link active" : "nav-link",
            "link dim white")
          }
        >
          {elementb}
          <label className="f6 tc">Search</label>
        </Link>
      </li>

      {/* Home link */}
      <li className=" f6  ph3">
        <Link
          to="/profile"
          className={
            (location.pathname === "/profile" ? "nav-link active" : "nav-link",
            "link dim white")
          }
        >
          {element}
          <label className="f6 tc">Profile</label>
        </Link>
      </li>

      {/* Update Profile/Covid Status Link */}
      <li className="f6  ph3 ">
        <Link
          to="/update-profile"
          className={
            (location.pathname === "/update-profile"
              ? "nav-link active"
              : "nav-link",
            "link dim white")
          }
        >
          {elementc}
          <label className="f6 tc">Update</label>
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;

// style={{ marginRight: "0px", marginTop: "0px" }}
/* within li for circle around icon and label style={{
          backgroundColor: "green",
          borderRadius: "60px",
          marginRight: "50px",
          marginLeft: "10px",
          height: "80px",
          width: "80px",
        }}*/
