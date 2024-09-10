import React from "react";

export default function TodoCard({
  children,
  handleDeleteTodo,
  index,
  handleEditTodo,
}) {
  return (
    <li className="todoItem">
      {children}
      <div className="actionContainer">
        <button
          className="edit"
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          className="delete"
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
