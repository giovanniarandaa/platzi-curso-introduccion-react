// import './App.css';

import { useState } from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar el curso de introduccion", completed: true },
//   { text: "Llorar con la llorona", completed: false },
// ];

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName)
  let parsedTodos

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedTodos = initialValue
  } else {
    parsedTodos = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedTodos);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem)
    setItem(newItem)
  }

  return [item, saveItem]
}

function App(props) {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
