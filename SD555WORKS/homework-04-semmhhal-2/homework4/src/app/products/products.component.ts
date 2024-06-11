import {
  Component,
  computed,
  effect,
  input,
  output,
  signal,
  Output,
  EventEmitter,
  inject,
  OnInit,
} from '@angular/core';
import { IntialResponse, Product, ProductResponse } from '../types';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ProductComponent } from '../product/product.component';
import { SlicePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CommunicationService } from '../communication.service';
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
        @for(product of $products(); track product.id){
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>{{ product.title }}</mat-card-title>
          <!-- <mat-card-subtitle>xxxxx</mat-card-subtitle> -->
        </mat-card-header>
        <img mat-card-image [src]="product.thumbnail" [alt]="product.title" />

        <mat-card-content>
          <p>
            {{ product.description }}
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button (click)="show()">More ...</button>
        </mat-card-actions>

        @if($showDetails()){
        <app-product [$display_item]="product" />
        } }
        <mat-paginator
          [length]="$response().total"
          [pageSize]="10"
          (page)="onPageChange($event)"
          aria-label="Select page"
        >
        </mat-paginator>
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
  http = inject(HttpClient);
  readonly communicationService = inject(CommunicationService);
  $response = signal<ProductResponse>(IntialResponse);
  $products = computed(() => this.$response().products);

  $showDetails = signal<boolean>(false);
  page = signal<number>(0);

  getData(index: number, limit: number = 10) {
    this.communicationService.givemeProducts(index, limit).subscribe((data) => {
      this.$response.set(data);
    });
  }
  onPageChange(event: PageEvent) {
    this.getData(event.pageIndex);
  }
  ngOnInit() {
    this.getData(0);
  }

  show() {
    this.$showDetails.set(!this.$showDetails());
  }
}
