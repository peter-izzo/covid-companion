import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faSearchPlus,
  faViruses,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import { Auth } from "aws-amplify";
// import { faMap } from "@fortawesome/free-solid-svg-icons";

//Font awesome icons
const element = <FontAwesomeIcon icon={faHouseUser} className="f2 pv2" />;
const elementb = <FontAwesomeIcon icon={faSearchPlus} className="f2 pv2" />;
const elementc = <FontAwesomeIcon icon={faViruses} className="f2 pv2" />;
const elementd = <FontAwesomeIcon icon={faSignOutAlt} className="f2 pv2" />;

function NavBar() {
  const location = useLocation();

  const signOut = () => {
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
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
      {/* signout link */}
      <li className="f6  ph3 ">
        <Link
          onClick={signOut}
          className={
            (location.pathname === "/" ? "nav-link active" : "nav-link",
            "link dim white")
          }
        >
          {elementd}
          <label className="f6 tc" id="logOutbtn">
            Logout
          </label>
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
