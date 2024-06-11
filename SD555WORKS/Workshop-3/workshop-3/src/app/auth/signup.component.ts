import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { User } from './user.type';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `<form [formGroup]="form" (ngSubmit)="go()">
    <input placeholder="fullname" formControlName="fullname" />
    <input placeholder="email" formControlName="email" />
    <input placeholder="password" type="password" formControlName="password" />
    <button type="submit" [disabled]="form.invalid">go</button>
  </form> `,
  styles: ``,
})
export class SignupComponent {
  readonly #auth = inject(AuthService);
  readonly #router = inject(Router);
  form = inject(FormBuilder).group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  go() {
    this.#auth.signup(this.form.value as User).subscribe((response) => {
      console.log(response);
      if (response.success) {
        this.#router.navigate(['signin']);
      }
    });
  }
}
