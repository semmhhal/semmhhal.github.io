import { Component, input, effect } from '@angular/core';
import { Product } from '../types';
import { CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, MatCardModule],
  template: `<div>Price: {{ $display_item().price | currency }}</div> `,
  styles: ``,
})
export class ProductComponent {
  $display_item = input.required<Product>();

  constructor() {
    effect(() => {
      console.log('id', this.$display_item().id);
    });
  }
}
