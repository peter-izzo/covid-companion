//import searchbar, searched friend list, single searched friend, add buttons, profile footer
import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import NavBar from "../components/Navbar/Navbar";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const users = [
  {
    name: "George",
  },
  {
    name: "Luna",
  },
  {
    name: "Hagrid",
    location: "connecticut",
  },
  { name: "Hermione" },
  { name: "Ginny" },
];

function SearchFriends() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
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
      <AmplifySignOut />
    </div>
  );
}

export default SearchFriends;
