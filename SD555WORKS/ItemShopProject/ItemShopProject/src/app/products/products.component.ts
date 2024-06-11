import { Component, computed, effect, input, signal } from '@angular/core';
import { Product } from '../types';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    ProductComponent,
  ],
  template: `
    <div class="container">
      <div class="centered">
        @if($display_item()){

        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>{{ $display_item().title }}</mat-card-title>
          <!-- <mat-card-subtitle>xxxxx</mat-card-subtitle> -->
        </mat-card-header>
        <img
          mat-card-image
          [src]="$display_item().thumbnail"
          [alt]="$display_item().title"
        />

        <mat-card-content>
          <p>
            {{ $display_item().description }}
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button (click)="show()">More ...</button>
        </mat-card-actions>

        @if($showdetail()){
        <app-product [$display_item]="$display_item()" />
        }
        <mat-paginator
          [length]="$products().length"
          [pageSize]="1"
          (page)="changePage($event)"
          aria-label="Select page"
        >
        </mat-paginator>

        } @else { loading ... }
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin: 0 auto;
        width: 400px;
        height: 100vh;
        background-color: white !important;
        position: relative;
      }
      .centered {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
      }
      .example-card {
        max-width: 400px;
      }
    `,
  ],
})
export class ProductsComponent {
  $products = input.required<Product[]>();
  $page_index = signal<number>(1);
  $display_item = computed(() => this.$products()[this.$page_index()]);
  $showdetail = signal<boolean>(false);

  changePage(event: PageEvent) {
    this.$page_index.set(event.pageIndex);
    this.$showdetail.set(false);
  }

  show() {
    this.$showdetail.set(!this.$showdetail());
  }
}
