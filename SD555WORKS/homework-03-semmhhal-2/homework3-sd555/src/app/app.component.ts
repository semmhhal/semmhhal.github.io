import { Component, effect, signal, computed } from '@angular/core';
import { Root } from './types';
import { Product } from './types';
import { ProductsComponent } from './products/products.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent],
  template: `<h1>Welcome to {{ title }}</h1>
    <app-products [$products]="$products()" />`,
  styles: [],
})
export class AppComponent {
  $response = signal<Root>({
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  });

  $products = computed(() => this.$response().products);
  title = 'new-app';
  constructor() {
    this.getData();
  }
  async getData() {
    const response = await fetch('https://dummyjson.com/products');
    const data: Root = await response.json();
    this.$response.set(data);
  }
}
