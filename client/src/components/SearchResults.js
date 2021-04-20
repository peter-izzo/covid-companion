import React, {useEffect, useState} from "react";
import FriendCard from "../components/FriendCard";
import axios from "axios";
import { Auth } from "aws-amplify";

function SearchResults({ users }) {

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
    <div
      className="search-results-container shadow-3 ph4"
      style={{
        backgroundColor: "#42a1ff",
        margin: "0px",
        paddingTop: "18px",
        paddingBottom: "300px",
      }}
    >
      <main class="m5 center">
        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          {/* {users.map((users) => { */}
            return <FriendCard className="w-100" user={userData} />;
          })}
          {/* @todo loop to populate multiple friend cards with user data*/}
        </article>
      </main>
    </div>
  );
}
export default SearchResults;
