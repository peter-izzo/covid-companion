import React, { useReducer } from "react";
import CardBtn from "./CardBtn";

function FriendCard() {
  {
    /* @todo add loop to fill in cards with names*/
  }
  return (
    <div className="friendCard">
      <div class="dtc w2 w3-ns v-mid">
        <img
          src="http://mrmrs.github.io/photos/p/2.jpg"
          class="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
        />
      </div>
      <div class="dtc v-mid pl3">
        <h1 class="f6 f5-ns fw6 lh-title black mv0">Young Gatchell</h1>
        <h2 class="f6 fw4 mt0 mb0 black-60">@yg</h2>
      </div>
      <div class="dtc v-mid">
        <form class="w-100 tr">
          <button
            class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
            type="submit">
            + Follow
          </button>
        </form>
      </div>
    </div>
  );
}

export default FriendCard;
