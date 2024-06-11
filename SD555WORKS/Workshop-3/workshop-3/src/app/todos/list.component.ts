import { Component, inject, signal } from '@angular/core';
import { Todo, TodoService } from './todo.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink, NgClass],
  template: `
    @for(todo of $todos(); track todo._id){
    <li [ngClass]="{ completed: todo.completed }">
      <a [routerLink]="['', 'todos', todo._id]">{{ todo.title }}</a>
      <button (click)="updateHandler(todo._id)">Update</button>
      <button (click)="deleteHandler(todo._id)">Delete</button>
    </li>
    } @empty {
    <p>No Todos for today!</p>
    }
  `,
  styles: `.completed{
    background-color:grey
  }`,
})
export class ListComponent {
  readonly todoService = inject(TodoService);
  $todos = signal<Todo[]>([]);
  readonly #router = inject(Router);
  readonly #notifcation = inject(ToastrService);

  constructor() {
    this.todoService.getTodos$.subscribe((response) => {
      this.$todos.set(response.data);
    });
  }
  updateHandler(todo_id: string) {
    this.#router.navigate(['', 'todos', 'update', todo_id]);
  }

  deleteHandler(todo_id: string) {
    this.todoService.deleteTodoById(todo_id).subscribe((response) => {
      if (response.data) {
        this.$todos.update((old_todos) =>
          old_todos.filter((todo) => todo._id !== todo_id)
        );
        this.#notifcation.success('deleted successfully!');
      }
    });
  }
}
