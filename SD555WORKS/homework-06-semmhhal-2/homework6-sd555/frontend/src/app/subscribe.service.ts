import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  readonly #http = inject(HttpClient);

  Subscribe(body: { email: string }) {
    return this.#http.post<{ success: boolean; data: string }>(
      'http://localhost:3000/subscribe',
      body
    );
  }
  verify(body: { email: string }) {
    return this.#http.post<null | Record<string, boolean>>(
      'http://localhost:3000/verify',
      body
    );
  }
}
