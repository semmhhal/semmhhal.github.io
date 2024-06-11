import { Routes } from '@angular/router';
import { ListComponent } from './Todo/list.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    pathMatch: 'full',
  },
  {
    path: 'update',
    loadComponent: () =>
      import('./Todo/update.component').then((c) => c.UpdateComponent),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./Todo/add.component').then((c) => c.AddComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
