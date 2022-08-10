import React from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

export const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext)

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
