import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  readonly #http = inject(HttpClient);
  readonly #auth = inject(AuthService);

  getPicture$ = this.#http.get<{
    success: boolean;
    data: { _id: string; url: string }[];
  }>(
    environment.BACKEND_SERVER_URL +
      '/users/' +
      this.#auth.state$()._id +
      '/pictures'
  );

  getPictureById(picture_id: string) {
    return this.#http.get<unknown>(
      environment.BACKEND_SERVER_URL +
        '/users/' +
        this.#auth.state$()._id +
        '/pictures/' +
        picture_id
    );
  }

  postPicture(formData: FormData) {
    return this.#http.post<{ sucess: boolean; data: boolean }>(
      environment.BACKEND_SERVER_URL +
        '/users/' +
        this.#auth.state$()._id +
        '/pictures',
      formData
    );
  }
  deletePicture(picture_id: string) {
    return this.#http.delete<{ success: boolean; data: boolean }>(
      environment.BACKEND_SERVER_URL +
        '/users/' +
        this.#auth.state$()._id +
        '/pictures/' +
        picture_id
    );
  }
}
