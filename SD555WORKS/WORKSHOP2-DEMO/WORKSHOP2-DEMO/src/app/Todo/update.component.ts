import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { Todo } from '../todo.types';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h1>Edit Todo</h1>
    <form [formGroup]="form" (ngSubmit)="onUpdate()">
      <input [formControl]="todo" placeholder="todo Item" /><br />
      <input type="checkbox" [formControl]="completed" />Completed<br />
      <button type="submit">Update</button>
    </form>
  `,
  styles: ``,
})
export class UpdateComponent {
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
  constructor() {
    const todo = this.#router.getCurrentNavigation()?.extras.state as Todo;
    console.log(todo);
    if (todo) {
      this.form.controls.id.patchValue(todo.id);
      this.form.controls.userId.patchValue(todo.userId);
      this.todo.patchValue(todo.todo);
      this.completed.patchValue(todo.completed);
    }
  }
  onUpdate() {
    this.todoService.updateTodoState(this.form.value as Todo);
    this.#router.navigate([''], { queryParams: { cache: true } });
  }
}
