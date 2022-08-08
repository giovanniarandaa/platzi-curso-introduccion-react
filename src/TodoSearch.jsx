import React from "react";
import "./TodoSearch.css";

export const TodoSearch = ({ searchValue, setSearchValue }) => {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};
