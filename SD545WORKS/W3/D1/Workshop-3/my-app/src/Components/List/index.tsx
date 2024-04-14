import React from "react";
import Item from "../Item";
import "./index.css";
import Todo from "../../types";

type Props = {
  todo: Todo[];
  onUpdateTodo: (id: string) => void;
  onDeleteTodoById: (id: string) => void;
};

export default function List(props: Props) {
  const { todo, onUpdateTodo, onDeleteTodoById } = props;
  return (
    <ul className="todo-main">
      {todo.map((todo) => (
        <Item
          key={todo.id}
          {...todo}
          onUpdateTodo={onUpdateTodo}
          onDeleteTodoById={onDeleteTodoById}
        />
      ))}
    </ul>
  );
}
