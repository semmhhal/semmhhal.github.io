import {
  Component,
  inject,
  OnInit,
  effect,
  input,
  signal,
  computed,
} from '@angular/core';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TodoService } from '../todo.service';
import { Todo } from '../types';
import { NgClass } from '@angular/common';
import {
  RouterLink,
  RouterModule,
  RouterOutlet,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [MatPaginatorModule, MatPaginator, NgClass, RouterLink],
  template: `
    <button (click)="gotoAdd()">Add New to do</button>
    <div align="center">
      <span (click)="display('All')">all</span> |
      <span (click)="display('Complete')">completed</span> |
      <span (click)="display('Incomplete')">Incomplete</span>
    </div>
    @for(todo of $displayed_todo();track todo.id){
    <li [ngClass]="{ completed: todo.completed }">
      <a [routerLink]="['update']" [state]="todo">{{ todo.todo }}</a>
      <span (click)="delete(todo.id)">Delete</span>
    </li>
    }
    <mat-paginator
      [length]="extra$().total"
      [pageSize]="10"
      aria-label="Select page of users"
      (page)="changePage($event)"
    ></mat-paginator>
  `,
  styles: [
    `
      .completed {
        text-decoration: line-through;
      }
    `,
  ],
})
export class ListTodosComponent {
  readonly #router = inject(Router);
  readonly todoService = inject(TodoService);
  extra$ = signal({ total: 0, skip: 0, limit: 0 });

  cache = input<string>();
  $filterDisplay = signal('all');
  $displayed_todo = computed(() =>
    this.todoService.todos$().filter((todo) => {
      if (this.$filterDisplay() === 'Complete') return todo.completed;
      if (this.$filterDisplay() === 'Incomplete') return !todo.completed;
      return todo;
    })
  );

  display(flag: string) {
    this.$filterDisplay.set(flag);
  }

  ngOnInit() {
    if (!this.cache() || this.todoService.todos$().length === 0)
      this.fetchTodos(0);
  }

  fetchTodos(index: number) {
    this.todoService.getTodos(index).subscribe((response) => {
      this.extra$.set({
        total: response.total,
        skip: response.skip,
        limit: response.limit,
      });
      this.todoService.todos$.set(response.todos);
    });
  }

  changePage(event: PageEvent) {
    this.fetchTodos(event.pageIndex);
  }

  delete(todo_id: number) {
    this.todoService.deleteTodo(todo_id).subscribe((response) => {
      if (response.isDeleted) {
        this.todoService.deleteTodoByIdfromState(todo_id);
      }
    });
  }

  gotoAdd() {
    this.#router.navigate(['add']);
  }
}
