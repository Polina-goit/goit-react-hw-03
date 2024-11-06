import React from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.serchContainer}>
      <p className={css.textSearch}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
      />
    </div>
  );
};

export default SearchBox;
