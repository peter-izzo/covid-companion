import React from "react";
import FriendCard from "../components/FriendCard";

function SearchResults({ users }) {
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
          {users.map((user) => {
            return <FriendCard className="w-100" user={user} />;
          })}
          {/* @todo loop to populate multiple friend cards with user data*/}
        </article>
      </main>
    </div>
  );
}
export default SearchResults;
