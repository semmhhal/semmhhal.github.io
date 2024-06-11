import { Component, effect, inject, input } from '@angular/core';
import { Todo, TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  template: `
    <p>UserId:{{ todo.user_id }}</p>
    <p>Title:{{ todo.title }}</p>
    <p>Description:{{ todo.description }}</p>
    <p>Completed:{{ todo.completed }}</p>
  `,
  styles: ``,
})
export class TodoComponent {
  readonly #todoService = inject(TodoService);
  todo_id = input<string>('');
  todo: Todo = {
    _id: '',
    user_id: '',
    title: '',
    description: '',
    completed: false,
  };

  constructor() {
    effect(() => {
      if (this.todo_id()) {
        this.#todoService.getTodoById(this.todo_id()).subscribe((response) => {
          this.todo = response.data;
        });
      }
    });
  }
}
