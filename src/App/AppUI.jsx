import React from "react";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";

export const AppUI = ({
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
