import React, { useEffect, useState } from "react";
import AvatarBio from "../components/AvatarBio";
import FriendCircle from "../components/FriendCircle";
import CovidInfo from "../components/CovidInfo";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Title from "../components/Title";
import { Auth } from "aws-amplify";
import axios from "axios";

function Profile() {
  const [userData, setUserData] = useState();
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
    <div>
      <Title />
      <div id="profile">
        <article
          className=" center bg-white br3 pa4-ns ba b--black-10 pb7 test"
          style={{ paddingTop: "40px", marginLeft: "0px", marginRight: "0px" }}
        >
          <div className="tc">
            <div className="test2">
              <AvatarBio user={userData} />
              <CovidInfo user={userData} />
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
