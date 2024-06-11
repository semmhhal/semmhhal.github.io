import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BrowserDetectService {
  constructor(private router: Router) {}

  isChrome(): boolean {
    // Check if the browser is Chrome
    const isChrome =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    return isChrome;
  }

  checkBrowser() {
    if (!this.isChrome()) {
      this.router.navigate(['error']);
    }
  }
}
