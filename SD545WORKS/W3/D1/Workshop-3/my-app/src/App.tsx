import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import List from "./Components/List";
import { useEffect, useState } from "react";
import Todo from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };
  const updateTodo = (id: string) => {
    //find the todo which you checked, then change done to be not done
    const newTodos = todos.map((todo) =>
      todo.id == id ? { ...todo, done: !todo.done } : todo
    );

    setTodos(newTodos);
  };

  const deleteTodoById = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    async function getTodos() {
      const response = await fetch("http://localhost:9000/todos");
      const data = await response.json();
      setTodos(data);
    }
    getTodos();
  }, []);

  return (
    <div>
      <div className="todo-container">
        <div className="todo-wrap">
          <Header onAddNewTodo={addNewTodo} />
          <List
            todo={todos}
            onUpdateTodo={updateTodo}
            onDeleteTodoById={deleteTodoById}
          />
          <Footer todos={todos} />
        </div>
      </div>
    </div>
  );
}
export default App;
