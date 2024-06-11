import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { Todo } from '../types';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: ` <h1>Add New Todo</h1>
    <form [formGroup]="form" (ngSubmit)="onAdd()">
      <input placeholder="todo" [formControl]="todo" /><br />

      <input type="checkbox" [formControl]="completed" />Completed<br />
      <button type="submit">Add</button>
    </form>`,
  styles: ``,
})
export class AddTodoComponent {
  readonly #router = inject(Router);
  todoService = inject(TodoService);

  form = inject(FormBuilder).nonNullable.group({
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
      this.todoService.addTodoByIdfromState(response);
      this.#router.navigate([''], { queryParams: { cache: true } });
    });
  }
}
