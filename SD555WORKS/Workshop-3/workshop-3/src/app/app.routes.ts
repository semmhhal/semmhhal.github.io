import { Router, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin.component';
import { inject } from '@angular/core';
import { AuthService } from './auth/auth.service';

const signin_guard = () => {
  const router = inject(Router);
  const signed_in = inject(AuthService).isLoggedin();
  if (signed_in) {
    router.navigate(['', 'todos', 'list']);
    return false;
  } else {
    return true;
  }
};
export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [signin_guard],
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./auth/signup.component').then((c) => c.SignupComponent),
    canActivate: [() => inject(AuthService).isLoggedin()],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./auth/profile-picture.component').then(
        (c) => c.ProfilePictureComponent
      ),
    canActivate: [() => inject(AuthService).isLoggedin()],
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./todos/todos.routes').then((c) => c.todos_routes),
    canActivate: [() => inject(AuthService).isLoggedin()],
  },
  { path: '**', redirectTo: '' },
];
