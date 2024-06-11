import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { ITodo, Todo, IntialResponse } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos$ = signal<Todo[]>([]);
  readonly #http = inject(HttpClient);

  getTodos(page = 0) {
    return this.#http.get<ITodo>(
      `https://dummyjson.com/todos?limit=10&skip=${page * 10}`
    );
  }
  getTodobyID(todo_id: number) {
    return this.#http.get<Todo>(`https://dummyjson.com/todos/${todo_id}`);
  }

  getTodobyIDfromState(todo_id: string | undefined) {
    return this.todos$().find((todo) => todo.id === Number(todo_id));
  }
  addTodo(todo: Todo) {
    return this.#http.post<Todo>('https://dummyjson.com/todos/add', todo);
  }

  // updateTodo(todo: Todo) {
  //   return this.#http.put<Todo>(`https://dummyjson.com/todos/${todo.id}`, todo);
  // }

  updateTodoByIdfromState(newtodo: Todo) {
    this.todos$.update((todos) =>
      todos.map((todo) => {
        if (todo.id === newtodo.id) {
          return newtodo;
        } else {
          return todo;
        }
      })
    );
  }

  deleteTodo(todo_id: number) {
    return this.#http.delete<Todo & { isDeleted: true }>(
      `https://dummyjson.com/todos/${todo_id}`
    );
  }

  deleteTodoByIdfromState(todo_id: number) {
    this.todos$.update((todos) => todos.filter((todo) => todo.id !== todo_id));
  }

  addTodoByIdfromState(todo: Todo) {
    this.todos$.update((todos) => [...todos, todo]);
  }
}
