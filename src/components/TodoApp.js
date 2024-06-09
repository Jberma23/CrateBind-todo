import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  function removeTodo(todo) {
    let newTodos = todos.filter((item) => {
      return item.text !== todo.text;
    });
    setTodos(newTodos);
  }
  function editTodo(oldValue, newValue) {
    const newTodos = todos.map((item) => {
      if (item.text === oldValue) {
        item.text = newValue;
      }
      return item;
    });
    setTodos(newTodos);
  }
  function addTodo(text) {
    setTodos([...todos, { text }]);
  }

  return (
    <div className="app">
      <div className="todo-list">
        <div className="page-title">todo items go here</div>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
      </div>
    </div>
  );
}
export default TodoApp;
