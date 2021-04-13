import React from "react";
import FriendCard from "../components/FriendCard";

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
