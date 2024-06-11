import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatGridListModule],
  template: `
    <div align="center">
      <mat-grid-list cols="1" rowHeight="120px">
        <mat-grid-tile align="center"
          ><h2>Subscribe to our Newsletter</h2></mat-grid-tile
        >
        <mat-grid-tile> <router-outlet /></mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: ``,
})
export class AppComponent {}
