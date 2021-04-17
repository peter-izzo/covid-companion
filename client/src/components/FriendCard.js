import React from "react";
import CardBtn from "./CardBtn";

/* @todo add loop to fill in cards with names add onclick event for follow button*/

function FriendCard({ user }) {
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
          src="http://mrmrs.github.io/photos/p/2.jpg"
          className=" b--black-10  br2 w4-ns h4-ns br-100 dib"
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
            paddingLeft: "10px",
            position: "relative",
          }}
        >
          {user?.name}
        </h1>
      </div>
      <div className="dtc v-mid">
        <form className="w-100 tr  ">
          <CardBtn />
        </form>
      </div>
    </div>
  );
}

export default FriendCard;
