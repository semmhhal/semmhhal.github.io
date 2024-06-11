import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  readonly #httpClient = inject(HttpClient);

  givemeProducts(page: number, limit: number = 10) {
    return this.#httpClient.get<ProductResponse>(
      `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`
    );
  }
}
