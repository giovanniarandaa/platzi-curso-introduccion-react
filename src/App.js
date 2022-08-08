// import './App.css';

import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de introduccion', completed: true},
  { text: 'Llorar con la llorona', completed: false},
]

function App(props) {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem completed={todo.completed} key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App;
