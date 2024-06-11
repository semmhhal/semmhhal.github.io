import { Component, inject, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoService } from './todo.service';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { NgStyle } from '@angular/common';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2 align="center">To-do List</h2>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {}
