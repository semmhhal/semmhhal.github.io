import { Component, computed, inject, input, signal } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router, RouterLink } from '@angular/router';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatPaginatorModule, NgStyle, RouterLink, NgClass],
  template: `
    <h1 align="center">My To-do List</h1>
    <div align="center">
      <button (click)="gotoAdd()">Add Todo</button>
    </div>
    <div align="center">
      <span (click)="display('All')">All </span> |
      <span (click)="display('Complete')">Completed </span> |
      <span (click)="display('Incomplete')">Incomplete </span>
    </div>
    @for(todo of $displayed(); track todo.id){
    <li [ngClass]="{ completed: todo.completed }">
      <a [routerLink]="['update']" [state]="todo">{{ todo.todo }}</a>

      <span (click)="delete(todo.id)">Delete</span>
    </li>
    }

    <mat-paginator
      [length]="$extra().total"
      [pageSize]="10"
      (page)="changepage($event)"
      aria-label="Select page"
    >
    </mat-paginator>
  `,
  styles: `.completed{
    text-decoration:line-through
  }`,
})
export class ListComponent {
  $extra = signal({ total: 0, skip: 0, limit: 0 });
  todoService = inject(TodoService);

  #router = inject(Router);
  cache = input<string>();
  $filtered = signal<string>('All');
  $displayed = computed(() =>
    this.todoService.$todos().filter((todo) => {
      if (this.$filtered() === 'Complete') {
        return todo.completed;
      } else if (this.$filtered() === 'Incomplete') {
        return !todo.completed;
      }
      return todo;
    })
  );

  display(flag: string) {
    this.$filtered.set(flag);
  }
  ngOnInit() {
    if (!this.cache() || this.todoService.$todos().length == 0) {
      this.fetchTodo(0);
    }
  }

  fetchTodo(index: number) {
    this.todoService.getTodos(index).subscribe((response) => {
      this.$extra.set({
        total: response.total,
        limit: response.limit,
        skip: response.skip,
      });
      this.todoService.$todos.set(response.todos);
    });
  }

  changepage(event: PageEvent) {
    this.fetchTodo(event.pageIndex);
  }

  delete(todo_id: number) {
    this.todoService.deleteTodo(todo_id).subscribe((response) => {
      if (response.isDeleted) {
        this.todoService.deleteTodoState(todo_id);
      }
    });
  }

  gotoAdd() {
    this.#router.navigate(['add']);
  }
}
