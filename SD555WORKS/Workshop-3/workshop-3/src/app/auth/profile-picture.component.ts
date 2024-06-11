import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from './profile.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="go()">
      <input type="file" formControlName="picture" (change)="setFile($event)" />
      <button type="submit">upload</button>
    </form>

    @for(pic of $pictures();track pic._id){
    <img
      width="100"
      src="http://localhost:3000/users/{{
        AuthService.state$()._id
      }}/pictures/{{ pic._id }}"
    />
    }
  `,
  styles: ``,
})
export class ProfilePictureComponent {
  file!: File;
  readonly #profileService = inject(ProfileService);
  readonly #notification = inject(ToastrService);
  readonly AuthService = inject(AuthService);

  form = inject(FormBuilder).nonNullable.group({
    picture: '',
  });
  $pictures = signal<{ _id: string; url: string }[]>([]);

  constructor() {
    this.#profileService.getPicture$.subscribe((response) => {
      this.$pictures.set(response.data);
    });
  }
  setFile(event: Event) {
    console.log(event);
    this.file = (event.target as HTMLInputElement).files![0];
  }
  go() {
    // console.log(this.file);
    const formData = new FormData();
    formData.append('picture', this.file);
    this.#profileService.postPicture(formData).subscribe((response) => {
      if (response.sucess) {
        this.#notification.success(
          'Profile Picture was uploaded Successfully!'
        );
        this.form.reset();
      }
    });
  }
}
