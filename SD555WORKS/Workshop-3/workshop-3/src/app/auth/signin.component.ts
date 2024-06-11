import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService, State } from './auth.service';
import { Router } from '@angular/router';
import { User } from './user.type';
import { jwtDecode } from 'jwt-decode';
import { ToastrService, provideToastr } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="go()">
      <input placeholder="email" formControlName="email" />
      <input
        placeholder="password"
        type="password"
        formControlName="password"
      />
      <button type="submit" [disabled]="form.invalid">go</button>
    </form>
  `,
  styles: ``,
})
export class SigninComponent {
  readonly #auth = inject(AuthService);
  readonly #router = inject(Router);
  readonly #notifications = inject(ToastrService);
  form = inject(FormBuilder).group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  go() {
    this.#auth
      .signin(this.form.value as { email: string; password: string })
      .subscribe({
        next: (response) => {
          if (response.success) {
            console.log(response.data);
            const decodedToken = jwtDecode(response.data) as State;
            console.log(decodedToken);
            this.#auth.state$.set({
              _id: decodedToken._id,
              fullname: decodedToken.fullname,
              email: decodedToken.email,
              jwt: response.data,
            });
            this.#router.navigate(['', 'todos', 'list']);
          }
        },
        error: (error) => {
          this.#notifications.error(`Invalid username or Password`);
        },
      });
  }
}
