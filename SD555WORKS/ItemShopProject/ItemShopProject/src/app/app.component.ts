import { Component, signal, computed } from '@angular/core';
import { ProductResponse } from './types';
import { IntialResponse } from './types';
import { fetch } from 'cross-fetch';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent],
  template: ` <app-products [$products]="$products()" />`,
  styles: [],
})
export class AppComponent {
  $response = signal<ProductResponse>(IntialResponse);
  $products = computed(() => this.$response().products);

  constructor() {
    this.getData();
  }

  async getData() {
    const response: Response = await fetch('https://dummyjson.com/products');
    const data: ProductResponse = await response.json();
    this.$response.set(data);
  }
}
