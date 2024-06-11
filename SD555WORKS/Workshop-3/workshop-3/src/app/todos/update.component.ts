import { Component, effect, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo, TodoService } from './todo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="go()">
      <input placeholder="title" formControlName="title" /><br />
      <textarea
        placeholder="description"
        formControlName="description"
      ></textarea
      ><br />
      <input
        placeholder="completed"
        type="checkbox"
        formControlName="completed"
      />Completed?<br />
      <button type="submit" [disabled]="form.invalid">go</button>
    </form>
  `,
  styles: ``,
})
export class UpdateComponent {
  todo_id = input<string>('');
  readonly #todoService = inject(TodoService);
  readonly #notification = inject(ToastrService);
  readonly #router = inject(Router);
  form = inject(FormBuilder).group({
    _id: '',
    user_id: '',
    title: ['', Validators.required],
    description: ['', Validators.required],
    completed: [false, Validators.required],
  });

  constructor() {
    effect(() => {
      if (this.todo_id())
        this.#todoService.getTodoById(this.todo_id()).subscribe((response) => {
          this.form.patchValue(response.data);
        });
    });
  }
  go() {
    this.#todoService
      .updateTodoById(this.form.value as Todo)
      .subscribe((response) => {
        if (response.data) {
          this.#notification.success('Updated Successfully!');
          this.#router.navigate(['', 'todos', 'list']);
        } else {
          this.#notification.error('Cannot update!');
        }
      });
  }
}
