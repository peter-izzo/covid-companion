// import AvatarBio, CovidInfo, FriendList (=FriendCard x5)

import React from "react";
// import Container from "../components/Container"
import AvatarBio from "../components/AvatarBio";
import FriendCircle from "../components/FriendCircle";
import CovidInfo from "../components/CovidInfo";

function Profile() {
  return (
    <article className="mw6 center bg-white br3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <AvatarBio />
        <CovidInfo />
        <FriendCircle />
      </div>
    </article>
  );
}

export default Profile;
