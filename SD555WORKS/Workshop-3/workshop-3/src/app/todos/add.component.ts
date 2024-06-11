import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo, TodoService } from './todo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
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
  styles: `form *{
    margin:10px
  }`,
})
export class AddComponent {
  readonly #todoService = inject(TodoService);
  readonly #notification = inject(ToastrService);
  readonly #router = inject(Router);
  form = inject(FormBuilder).group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    completed: [false, Validators.required],
  });

  go() {
    this.#todoService.addTodo(this.form.value as Todo).subscribe((response) => {
      if (response.success) {
        this.#notification.success('Todo is added succesfully!');
        this.#router.navigate(['', 'todos', 'list']);
      } else {
        this.#notification.error('Something went wrong try again Later!');
      }
    });
  }
}
