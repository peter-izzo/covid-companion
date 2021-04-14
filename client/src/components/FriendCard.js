import React from "react";
// import CardBtn from "./CardBtn";

/* @todo add loop to fill in cards with names*/

function FriendCard() {
  return (
    <div className="friendCard">
      <div className="dtc w2 w3-ns v-mid">
        <img
          src="http://mrmrs.github.io/photos/p/2.jpg"
          className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
          alt="nada"
        />
      </div>
      <div className="dtc v-mid pl3">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">Young Gatchell</h1>
        <h2 className="f6 fw4 mt0 mb0 black-60">@yg</h2>
      </div>
    </div>
  );
}

export default FriendCard;
