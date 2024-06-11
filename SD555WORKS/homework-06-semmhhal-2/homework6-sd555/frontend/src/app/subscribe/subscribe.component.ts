import { Component, inject } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { SubscribeService } from '../subscribe.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  template: `<form class="example-form" [formGroup]="form" (ngSubmit)="go()">
    <mat-form-field class="example-full-width">
      <mat-label>Email</mat-label>
      <input
        type="email"
        matInput
        [formControl]="email"
        placeholder="Ex. pat@example.com"
      />
      @if (email.hasError('email') && !email.hasError('required')) {
      <mat-error>Please enter a valid email address</mat-error>
      } @if (email.hasError('required')) {
      <mat-error>Email is <strong>required</strong></mat-error
      >} @if (email.hasError('exist')) {
      <mat-error>Email already exist</mat-error>
      }
    </mat-form-field>
    <button mat-stroked-button type="submit" [disabled]="email.invalid">
      Subscribe
    </button>
  </form>`,
  styleUrl: `./styles.css`,
})
export class SubscribeComponent {
  readonly #subscribeService = inject(SubscribeService);
  readonly #toastr = inject(ToastrService);
  form = inject(FormBuilder).nonNullable.group({
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'change',
      },
    ],
  });

  get email() {
    return this.form.controls.email;
  }

  constructor() {
    this.email.valueChanges
      .pipe(
        debounceTime(1000),
        mergeMap((email) => this.#subscribeService.verify({ email }))
      )
      .subscribe((response) => {
        this.email.setErrors(response);
      });
  }
  go() {
    this.#subscribeService
      .Subscribe(this.form.value as { email: string })
      .subscribe((response) => {
        if (response.success) {
          this.#toastr.success('Subscribed Successfully');
          this.email.patchValue('');
          this.email.setErrors(null);
        } else {
          this.#toastr.error('Something went wrong');
        }
      });
  }

  // checkifExist(
  //   control: AbstractControl
  // ): Observable<null | Record<string, boolean>> {
  //   return this.#subscribeService.verify({ email: this.email.value });
  // }
}
