import React from "react";
import "../index.css";

// Profile Avatar, Name, and Location
function AvatarBio({ user }) {
  return (
    <div className="tc bio" style={{ paddingBottom: "5px" }}>
      <img
        src="http://tachyons.io/img/logo.jpg"
        className="br-100 pa1 ba b--black-10 h5 w5"
        alt="avatar"
      />
      <h1>{user?.name}</h1>
      <h2 className="f3 fw4 gray mt0" id="location">
        {user?.location}
      </h2>
    </div>
  );
}
export default AvatarBio;
