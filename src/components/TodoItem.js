import { useState } from "react";
function TodoItem({ todo, removeTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setvalue] = useState(todo.text);
  function handleUpdate() {
    editTodo(todo.text, value);
    setIsEditing(!isEditing);
  }
  return (
    <div className="singleTodoItem">
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            className="edit-text-input"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
          <button type="submit">Done</button>
          <button onClick={(event) => setIsEditing(!isEditing)}>Cancel</button>
        </form>
      ) : (
        <>
          {todo.text}

          <button
            className="todo-edit"
            onClick={(event) => setIsEditing(!isEditing)}
          >
            Edit
          </button>
          <button onClick={(event) => removeTodo(todo)}>Remove</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
