import React from "react";
import Friend from "../components/Friend";

// @todo populate profile with added friends
// const friends =[];

function FriendCircle() {
  return (
    <main
      className="ml5 center pa3 shadow-3 br3"
      style={{
        backgroundColor: "#ffda1f",
        margin: "20px",
      }}
    >
      <h3 className="center">Friend Circle</h3>
      <article
        className="dt center w-100 bb b--black-05 pb2 mt2"
        href="#0"
      ></article>{" "}
      <Friend />
    </main>
  );
}

export default FriendCircle;
