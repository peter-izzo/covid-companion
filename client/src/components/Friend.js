import React from "react";
// import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const element = (
  <FontAwesomeIcon icon={faInfoCircle} className="f4 ml5 pl4 o-60" />
);

/* @todo add loop to fill in cards with names add onclick event for follow button*/

function Friend({ user }) {
  // const location = useLocation();

  return (
    <div
      className="friendCard pv2 w-100 br3 shadow-3 "
      style={{
        marginBottom: "10px",
        marginRight: "10px",
        backgroundColor: "white",
      }}
    >
      <div className="dtc w2 w3-ns v-mid">
        <img
          src="http://tachyons.io/img/logo.jpg"
          className="w-100 br-100 pa2 dib"
          alt={user?.userId}
          style={{ padding: "15px", paddingLeft: "18px" }}
        />
      </div>
      <div className="dtc v-mid pl3 tj" key={user?.userId}>
        <h1
          className="f6 f5-ns fw6 lh-title black mv0 w-100 tj"
          style={{
            maxWidth: "75px",
            paddingRight: "100px",
            paddingLeft: "20px",
            position: "relative",
          }}
        >
          {user?.name} {"FirstName, LastName"}
        </h1>
        <h2 className="f7 f5-ns fw4 lh-title black mv0 tc">
          {user?.location} {"From Location"}
        </h2>
      </div>
      <div className="dtc v-mid">
        <form className="w-100 tr" style={{ position: "relative" }}></form>
        {element}

        {/* @todo other profile? - Link to friend's profile based on their id... */}
        {/* <Link
          to="/user"
          className={
            (location.pathname === `/profile/${user?.userId}`
              ? "nav-link active"
              : "nav-link",
            "link dim white")
          }
        >
          {element}
        </Link> */}
      </div>
    </div>
  );
}

export default Friend;
