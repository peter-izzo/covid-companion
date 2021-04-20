import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import NavBar from "../components/Navbar/Navbar";
import axios from "axios";



function SearchFriends() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  async function getUsers(e) {
    e.preventDefault();
    axios.post(`http://localhost:3001/search`, {name:searchTerm}).then(
      (res) => {
        console.log(res.data);
        setSearchResults(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  // React.useEffect(() => {
  //   const results = users.filter((user) =>
  //     user.name.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);

  return (
    <div className="search-container">
      <SearchBar searchTerm={searchTerm} onChange={handleChange} onSubmit={getUsers} />
      <div className="search-results">
        <SearchResults users={searchResults} />
      </div>
      <NavBar />
    </div>
  );
}

export default SearchFriends;