import React, { ChangeEvent } from "react";
import "./index.css";
import Todo from "../../types";

type Props = {
  todos: Todo[];
  onUpdateAll: (value: boolean) => void;
  onDeleteFinishedTodos: () => void;
};

export default function Footer(props: Props) {
  const { todos, onUpdateAll, onDeleteFinishedTodos } = props;
  const changeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    onUpdateAll(e.target.checked);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      onDeleteFinishedTodos();
    }
  };
  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={
            todos.filter((todo) => todo.done).length === todos.length &&
            todos.length !== 0
          }
          onChange={changeCheckbox}
        />
      </label>
      <span>
        <span>Finished {todos.filter((todo) => todo.done).length}</span> / total
        {todos.length}
      </span>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete Finished Tasks
      </button>
    </div>
  );
}
