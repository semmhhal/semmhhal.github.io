import { Routes } from '@angular/router';
import { SubscribeComponent } from './subscribe/subscribe.component';

export const routes: Routes = [
  {
    path: '',
    component: SubscribeComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];
