import React, { useReducer } from "react";
import CardBtn from "./CardBtn";

function FriendCard() {
<<<<<<< HEAD
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
            type="submit"
          >
            + Follow
          </button>
        </form>
      </div>
    </div>
  );
}

export default FriendCard;
=======

    return(
        <main className="mw6 center">
            <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                <div className="dtc w2 w3-ns v-mid">
                    <img src={user.image} className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" alt={user._id}/>
                </div>
                <div class="dtc v-mid pl3">
                    <h1 class="f6 f5-ns fw6 lh-title black mv0">{user.name}</h1>
                    <h2 class="f6 fw4 mt0 mb0 black-60">{user.username}</h2>
                </div>
                <CardBtn />
            </article>
        </main>
    );
};


export default FriendCard;
>>>>>>> 0afe1849afff02b2b6e2c94825beaed603727951
