import { Injectable, inject, signal } from '@angular/core';
import { Itodo, Todo } from './todo.types';
import { HttpClient } from '@angular/common/http';
import { skip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  $todos = signal<Todo[]>([]);
  http = inject(HttpClient);

  getTodos(page = 0) {
    return this.http.get<Itodo>(
      `https://dummyjson.com/todos?limit=10&skip=${page * 10}`
    );
  }

  getTodoById(todo_id: number) {
    return this.http.get<Todo>(`https://dummyjson.com/todos/${todo_id}`);
  }

  getTodobyIDfromState(todo_id: string | undefined) {
    return this.$todos().find((todo) => todo.id === Number(todo_id));
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>('https://dummyjson.com/todos/add', todo);
  }

  addTodoState(addedtodo: Todo) {
    return this.$todos.update((todo) => [...todo, addedtodo]);
  }

  updateTodo(newTodo: Todo, todo_id: number) {
    return this.http.put<Todo>(
      `https://dummyjson.com/todos/${todo_id}`,
      newTodo
    );
  }
  updateTodoState(newTodo: Todo) {
    return this.$todos.update((todos) =>
      todos.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo;
        } else {
          return todo;
        }
      })
    );
  }
  deleteTodo(todo_id: number) {
    return this.http.delete<Todo & { isDeleted: true }>(
      `https://dummyjson.com/todos/${todo_id}`
    );
  }

  deleteTodoState(todo_id: number) {
    return this.$todos.update((todos) =>
      todos.filter((todo) => todo.id !== todo_id)
    );
  }
}
