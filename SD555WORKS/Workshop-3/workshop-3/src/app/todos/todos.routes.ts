import { Route, Routes } from '@angular/router';

export const todos_routes: Routes = [
  {
    path: 'list',
    loadComponent: () =>
      import('./list.component').then((c) => c.ListComponent),
  },
  {
    path: 'add',
    loadComponent: () => import('./add.component').then((c) => c.AddComponent),
  },
  {
    path: 'update/:todo_id',
    loadComponent: () =>
      import('./update.component').then((c) => c.UpdateComponent),
  },
  {
    path: ':todo_id',
    loadComponent: () =>
      import('./todo.component').then((c) => c.TodoComponent),
  },
];
