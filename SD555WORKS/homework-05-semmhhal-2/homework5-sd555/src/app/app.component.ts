import { NgStyle } from '@angular/common';
import { Component, signal, effect, inject } from '@angular/core';
import IHistory from './history.type';
import { CheatDirectiveDirective } from './cheat-directive.directive';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BrowserDetectService } from './browsr-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div align="center">
      <h1>HEX Color Guessing Game</h1>
      <nav>
        <li><a [routerLink]="['game']">Game</a></li>
        <li><a [routerLink]="['history']">History</a></li>
      </nav>
      <router-outlet />
    </div>
  `,
  styles: [
    `
      #color_space {
        width: 400px;
        height: 250px;
      }
      button {
        margin-right: 15px;
      }
    `,
  ],
})
export class AppComponent {
  browserService = inject(BrowserDetectService);

  constructor() {
    effect(() => {
      this.browserService.checkBrowser();
    });
  }
}
