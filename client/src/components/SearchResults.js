import React from "react";
<<<<<<< HEAD
import FriendCard from "./FriendCard";
=======
import FriendCard from "../components/FriendCard";
>>>>>>> ab8e2842b4df4acafe2ee2d8373757c5777f8ea6

function SearchResults() {
  return (
    <div className="search-results-container">
      <main class="mw5 center">
        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <FriendCard />
          {/* @todo loop to populate multiple friend cards with user data*/}
        </article>
      </main>
      ;
    </div>
  );
}
export default SearchResults;
