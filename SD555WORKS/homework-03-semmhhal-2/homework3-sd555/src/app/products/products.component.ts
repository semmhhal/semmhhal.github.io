import { Component, computed, input, signal, effect } from '@angular/core';
import { Product } from '../types';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SlicePipe } from '@angular/common';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    SlicePipe,
    MatPaginator,
    ProductDetailComponent,
  ],
  template: `
    <mat-card class="container">
      <mat-card-header>
        <div class="centered"></div>
        <mat-card-subtitle></mat-card-subtitle>
        @if($displayed_item().title.length>20){
        <mat-card-subtitle
          >{{ $displayed_item().title | slice : 0 : 20 }}...</mat-card-subtitle
        >}@else {
        <mat-card-subtitle>{{ $displayed_item().title }}</mat-card-subtitle>
        }
      </mat-card-header>

      <img
        mat-card-image
        src="{{ $displayed_item().thumbnail }}"
        alt="{{ $displayed_item().images }}"
      />
      <mat-card-content>
        @if($displayed_item().description.length>100){
        <p>{{ $displayed_item().description | slice : 0 : 100 }}...</p>
        }@else {
        <p>
          {{ $displayed_item().description }}
        </p>
        }

        <button mat-button>More...</button>
        @if($showDetails()){
        <app-product-detail [$product]="$displayed_item()" />
        }
      </mat-card-content>
      <mat-card-actions> </mat-card-actions>
    </mat-card>
    <mat-paginator
      [length]="$products().length"
      2
      [pageSize]="1"
      [pageSizeOptions]="[1, 10, 15, 30]"
      (page)="changePage($event)"
    >
    </mat-paginator>
  `,

  styles: `[./products.component.css]`,
})
export class ProductsComponent {
  $products = input.required<Product[]>();
  $pageIndex = signal<number>(1);
  $displayed_item = computed<Product>(() => {
    return this.$products()[this.$pageIndex()];
  });

  constructor() {
    effect(() => {
      console.log(this.$displayed_item());
    });
  }
  changePage(event: PageEvent) {
    this.$pageIndex.set(event.pageIndex);
  }
  $showDetails = signal<boolean>(false);
  show() {
    this.$showDetails.set(true);
  }
}
