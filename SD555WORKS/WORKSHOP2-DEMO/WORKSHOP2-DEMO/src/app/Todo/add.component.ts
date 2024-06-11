import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.types';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h1>Add Todo</h1>
    <form [formGroup]="form" (ngSubmit)="onAdd()">
      <input [formControl]="todo" placeholder="todo Item" /><br />
      <input type="checkbox" [formControl]="completed" />Completed<br />
      <button type="submit">Add</button>
    </form>
  `,
  styles: ``,
})
export class AddComponent {
  readonly #router = inject(Router);
  todoService = inject(TodoService);

  form = inject(FormBuilder).nonNullable.group({
    id: 0,
    userId: 5,
    todo: '',
    completed: false,
  });
  get todo() {
    return this.form.controls.todo;
  }
  get completed() {
    return this.form.controls.completed;
  }

  onAdd() {
    this.todoService.addTodo(this.form.value as Todo).subscribe((response) => {
      this.todoService.addTodoState(response);
      this.#router.navigate([''], { queryParams: { cache: true } });
    });
  }
}
