//import searchbar, searched friend list, single searched friend, add buttons, profile footer
import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

function SearchFriends() {
  return (
    <div className="search-container">
      <SearchBar />
      <div className="search-results">
        <SearchResults />
      </div>
    </div>
  );
}

export default SearchFriends;
