import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal, effect } from '@angular/core';
import { User } from './user.type';
import { environment } from '../../environments/environment.development';
export interface State {
  _id: string;
  fullname: string;
  email: string;
  jwt: string;
}

export const initialState = {
  _id: '',
  fullname: 'Guest',
  email: '',
  jwt: '',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  state$ = signal<State>(initialState);
  readonly #http = inject(HttpClient);

  constructor() {
    effect(() => {
      localStorage.setItem('workshop3', JSON.stringify(this.state$()));
    });
  }
  signup(user_details: User) {
    return this.#http.post<{ success: boolean; data: User }>(
      environment.BACKEND_SERVER_URL + '/auth/signup',
      user_details
    );
  }

  signin(credentials: { email: string; password: string }) {
    return this.#http.post<{ success: boolean; data: string }>(
      environment.BACKEND_SERVER_URL + '/auth/signin',
      credentials
    );
  }

  isLoggedin() {
    return this.state$()._id ? true : false;
  }
}
