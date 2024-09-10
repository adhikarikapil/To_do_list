import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList({
  todos,
  handleDeleteTodo,
  todoValue,
  setTodoValue,
}) {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard
            handleDeleteTodo={handleDeleteTodo}
            key={todoIndex}
            index={todoIndex}
          >
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
