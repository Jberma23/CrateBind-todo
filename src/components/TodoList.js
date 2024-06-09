import { useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, editTodo }) {
  useEffect(() => {});
  return (
    <ul>
      {todos?.map((todo, idx) => (
        <TodoItem
          key={`${idx}`}
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
