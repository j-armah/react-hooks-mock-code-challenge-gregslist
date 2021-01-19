import React from "react";

function Search({ onSearch, search }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
