import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService, initialState } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Welcome {{ auth.state$().fullname }}</h1>
    @if(auth.isLoggedin()){
    <nav>
      <ul>
        <li>
          <a [routerLink]="['', 'profile']">Profile Picture</a>
        </li>
        <li><a [routerLink]="['', 'todos', 'list']">Todo List</a></li>
        <li>
          <a [routerLink]="['', 'todos', 'add']">Add new Item to your List</a>
        </li>
        <li>
          <a (click)="logOut()">Log Out</a>
        </li>
      </ul>
    </nav>
    }@else {
    <nav>
      <ul>
        <li><a [routerLink]="['signup']">SignUp</a></li>
        <li><a [routerLink]="['signin']">SignIn</a></li>
      </ul>
    </nav>
    }

    <router-outlet />
  `,
  styles: [
    `
      nav > ul > li {
        display: inline;
        list-style-type: none;
        padding-right: 20px;
      }
    `,
  ],
})
export class AppComponent {
  readonly auth = inject(AuthService);
  readonly #router = inject(Router);

  logOut() {
    this.auth.state$.set(initialState);
    this.#router.navigate(['signin']);
  }
}
