import { useState } from "react";
import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch }) => {
   const [query, setQuery] = useState("");

   const handleInputChange = (e) => {
     setQuery(e.target.value);
     onSearch(e.target.value); // Pass query to parent
   };
  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search here ..."
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
        <FiSearch className="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
