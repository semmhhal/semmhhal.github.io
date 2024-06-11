import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

export interface Todo {
  _id: string;
  user_id: string;
  title: string;
  description: string;
  completed: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  readonly #http = inject(HttpClient);
  getTodos$ = this.#http.get<{ success: boolean; data: Todo[] }>(
    environment.BACKEND_SERVER_URL + '/todos'
  );

  getTodoById(todo_id: string) {
    return this.#http.get<{ success: boolean; data: Todo }>(
      environment.BACKEND_SERVER_URL + '/todos/' + todo_id
    );
  }

  updateTodoById(todo: Todo) {
    return this.#http.put<{ success: boolean; data: number }>(
      environment.BACKEND_SERVER_URL + '/todos/' + todo._id,
      todo
    );
  }
  deleteTodoById(todo_id: string) {
    return this.#http.delete<{ success: boolean; data: number }>(
      environment.BACKEND_SERVER_URL + '/todos/' + todo_id
    );
  }
  addTodo(todo: Todo) {
    return this.#http.post<{ success: boolean; data: Todo }>(
      environment.BACKEND_SERVER_URL + '/todos/',
      todo
    );
  }
}
