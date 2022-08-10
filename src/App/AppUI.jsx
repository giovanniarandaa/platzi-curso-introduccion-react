import React from "react";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";

export const AppUI = ({
  error,
  loading,
  searchedTodos,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  completeTodo,
  deleteTodo
}) => {
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crear tu primer TODO!</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            completed={todo.completed}
            key={todo.text}
            text={todo.text}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
};
