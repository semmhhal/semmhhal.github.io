import { Routes } from '@angular/router';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

export const routes: Routes = [
  {
    path: '',
    component: ListTodosComponent,
    pathMatch: 'full',
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./add-todo/add-todo.component').then((c) => c.AddTodoComponent),
  },
  // {
  //   path: 'update/:todo_id',
  //   loadComponent: () =>
  //     import('./update-todo/update-todo.component').then(
  //       (c) => c.UpdateTodoComponent
  //     ),
  // },
  {
    path: 'update',
    loadComponent: () =>
      import('./update-todo/update-todo.component').then(
        (c) => c.UpdateTodoComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
