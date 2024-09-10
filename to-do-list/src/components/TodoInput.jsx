export default function TodoInput({ handleAddTodo, todoValue, setTodoValue }) {
  return (
    <header>
      <input
        value={todoValue}
        onChange={(event) => {
          setTodoValue(event.target.value);
        }}
        placeholder="Enter todo..."
        autoFocus
      />
      <button
        onClick={() => {
          handleAddTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
