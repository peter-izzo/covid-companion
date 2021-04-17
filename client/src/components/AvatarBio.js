import React from "react";
// import CovidInfo from "./CovidInfo"; // @todo import to populate?

import "../index.css";

function AvatarBio({ user }) {
  return (
    <div className="tc pa4 bio">
      <img
        src="http://tachyons.io/img/logo.jpg"
        className="br-100 pa1 ba b--black-10 h5 w5"
        alt="avatar"
      />
      <h1>Full Name {user?.name}</h1>
      {/* <h2 className="f5 fw4 gray mt0" id="age">
        Age
      </h2> */}
      <h2 className="f5 fw4 gray mt0" id="location">
        Location {user?.location}
      </h2>
      {/* <CovidInfo /> */} {/* @todo importing covidInfo? */}
    </div>
  );
}
export default AvatarBio;
