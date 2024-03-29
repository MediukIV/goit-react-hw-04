import { useState } from "react";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    if (searchQuery.trim() === "") {
      toast.error("you need to write something in the input");
    }
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.searchBarInput}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search images and photos"
        />
        <button className={css.searchBarBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;