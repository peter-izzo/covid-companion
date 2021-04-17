<<<<<<< HEAD
import React from "react";
=======
// import AvatarBio, CovidInfo, FriendList (=FriendCard x5)

import React, { useEffect, useState } from "react";
>>>>>>> 8822984a855b1d83ff7277724bfc7a3479dc9491
import AvatarBio from "../components/AvatarBio";
import FriendCircle from "../components/FriendCircle";
// import CovidInfo from "../components/CovidInfo";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Auth } from "aws-amplify";
import axios from "axios"

function Profile() {
  const [userData, setUserData] = useState()
  async function getUserData() {
    const user = await Auth.currentAuthenticatedUser();
    axios.get(`http://localhost:3001/profile/${user.attributes.sub}`).then(
      (res) => {
        console.log(res.data);
        setUserData(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div id="profile">
      <div>
        <article className="mw6 center bg-white br3 pa4-ns mv3 ba b--black-10 pb7 test">
          <div className="tc">
            <div className="test2">
<<<<<<< HEAD
              <AvatarBio />
              {/* <CovidInfo /> */}
=======
              <AvatarBio user={userData} />
              <CovidInfo user={userData} />
>>>>>>> 8822984a855b1d83ff7277724bfc7a3479dc9491
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
