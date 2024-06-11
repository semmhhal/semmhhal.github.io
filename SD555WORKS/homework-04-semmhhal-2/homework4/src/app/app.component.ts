import { Component, signal, computed, inject, effect } from '@angular/core';
import { Product, ProductResponse } from './types';
import { IntialResponse } from './types';
import { ProductsComponent } from './products/products.component';
import { CommunicationService } from './communication.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent, AsyncPipe],
  // @if(prod$ | async){
  template: ` <app-products /> `,
  styles: [],
})
export class AppComponent {}
