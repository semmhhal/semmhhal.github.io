import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  template: `
    <div align="center">
      <h1>Error</h1>
      <p>
        This application requires Google Chrome. Please switch to Google Chrome
        and try again.
      </p>
    </div>
  `,
  styles: [],
})
export class ErrorComponent {}
