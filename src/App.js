// import './App.css';

import { useState } from "react";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de introduccion', completed: true},
  { text: 'Llorar con la llorona', completed: false},
]

function App(props) {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem completed={todo.completed} key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App;
