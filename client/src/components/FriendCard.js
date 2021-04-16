import React from "react";
// import CardBtn from "./CardBtn";

/* @todo add loop to fill in cards with names add onclick event for follow button*/

function FriendCard({user}) {
  return (
    <div className="friendCard">
      <div className="dtc w2 w3-ns v-mid">
        <img
          src="http://mrmrs.github.io/photos/p/2.jpg"
          className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
          alt="nada"/>
      </div>
      <div className="dtc v-mid pl3" key = {user?.userId}>
        <h1 className="f6 f5-ns fw6 lh-title black mv0">{user?.name}</h1>
        {/* <h2 className="f6 fw4 mt0 mb0 black-60">{}</h2> */}
      </div>
      <div class="dtc v-mid">
      <form class="w-100 tr">
        <button
          class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
          type="submit"
        >
          + Add to Circle
        </button>
      </form>
    </div>
    </div>
  );
}

export default FriendCard;
