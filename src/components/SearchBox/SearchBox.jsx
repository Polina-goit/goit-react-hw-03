import React from "react";

const SearchBox = ({value, onFilter}) => {
  return (
    <div>
          <p>Find contacts by name</p>
          <input type="text"
              value={value}
              onChange={(evt) => onFilter(evt.target.value)} />
          </div>
  );
};

export default SearchBox;
