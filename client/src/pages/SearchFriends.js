//import searchbar, searched friend list, single searched friend, add buttons, profile footer
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import NavBar from "../components/Navbar/Navbar";


// const users = [
//   {
//     name: "George",
//   },
//   {
//     name: "Luna",
//   },
//   {
//     name: "Hagrid",
//     location: "connecticut",
//   },
//   { name: "Hermione" },
//   { name: "Ginny" },
// ];


function SearchFriends({users}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);


  return (
    <div className="search-container">
      <SearchBar searchTerm={searchTerm} onChange={handleChange} />
      <div className="search-results">
        <SearchResults users={searchResults} />
      </div>
      <NavBar />
    </div>
  );
}

export default SearchFriends;
