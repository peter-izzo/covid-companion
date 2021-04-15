//import searchbar, searched friend list, single searched friend, add buttons, profile footer
import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import ReactDOM from "react-dom";
import Friendcard from "../components/FriendCard";

const users = [
  {
    name: "george"
  },
  {
    name: "lucy"
  },
  {
    name: "Hagrid",
    location: "connecticut"
  }
]

function SearchFriends() {

const [searchTerm, setSearchTerm] = React.useState("");
const [searchResults, setSearchResults] = React.useState([]);
const handleChange = event => {
  setSearchTerm(event.target.value);
};
React.useEffect(() => {
  const results = users.filter(user => user.name.toLowerCase().includes(searchTerm));
  setSearchResults(results);}, [searchTerm]);  

  return (
    <div className="search-container">
      <SearchBar searchTerm = {searchTerm} onChange = {handleChange} />
      <div className="search-results">
        <SearchResults users = {searchResults}/>
      </div>
    </div>
  );
}

export default SearchFriends;
