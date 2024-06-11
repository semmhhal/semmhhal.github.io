import { Component, input } from '@angular/core';
import { Product } from '../types';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  template: `<p>{{ $product().price }}</p>`,
  styles: ``,
})
export class ProductDetailComponent {
  $product = input.required<Product>();
}
