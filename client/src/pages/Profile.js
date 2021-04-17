// import AvatarBio, CovidInfo, FriendList (=FriendCard x5)

import React from "react";
import AvatarBio from "../components/AvatarBio";
import FriendCircle from "../components/FriendCircle";
import CovidInfo from "../components/CovidInfo";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Profile() {
  return (
    <div id="profile">
      <div>
        <article className="mw6 center bg-white br3 pa4-ns mv3 ba b--black-10 pb7 test">
          <div className="tc">
            <div className="test2">
              <AvatarBio />
              <CovidInfo />
            </div>
            <FriendCircle />
          </div>
        </article>
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
