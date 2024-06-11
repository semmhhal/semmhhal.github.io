import { HttpClient } from '@angular/common/http';
import { Component, inject, input, effect } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  ValidationErrors,
  FormGroup,
  FormControlName,
} from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `<form [formGroup]="form" (ngSubmit)="onUpdate()">
    <input placeholder="todo" [formControl]="todo" /><br />
    <input type="checkbox" [formControl]="completed" />Completed<br />
    <button type="submit">update</button>
  </form> `,
  styles: ``,
})
export class UpdateTodoComponent {
  readonly #router = inject(Router);
  todoService = inject(TodoService);
  // todo_id = input<string>();

  form = inject(FormBuilder).nonNullable.group({
    id: 0,
    userId: 0,
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
    if (todo) {
      this.form.controls.id.patchValue(todo.id);
      this.form.controls.userId.patchValue(todo.userId);
      this.todo.patchValue(todo.todo);
      this.completed.patchValue(todo.completed); //we need getters to dynamically use the elements in template
    }
  }

  onUpdate() {
    // this.todoService
    //   .updateTodo(this.form.value as Todo)
    //   .subscribe((response) => {});
    this.todoService.updateTodoByIdfromState(this.form.value as Todo);
    this.#router.navigate([''], { queryParams: { cache: true } });
  }
}
