import { NgClass, NgStyle } from '@angular/common';
import { Component, signal, computed, effect } from '@angular/core';
import { ShortenPipe } from './shorten.pipe';
import { SwapLettersPipe } from './swap-letters.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, NgStyle, ShortenPipe, SwapLettersPipe],
  template: `
    <h1>
      {{
        'Welcome to the home of all codes! lets see how this works!'
          | shorten : 10
      }}
    </h1>
    <h1>
      {{
        'Welcome to the home of all codes! lets see how this works!'
          | shorten : 25
      }}
      <h1>{{ 'Asaad and Theo' | swapLetters : { a: '@', o: '0' } }}</h1>
    </h1>
    <h1 [ngClass]="{ green: true }">
      This number is increasing every 5 seconds!
      {{ $counter() }}
    </h1>

    <h1>Prime not Prime status: {{ $is_prime() }}</h1>
  `,
  styles: [
    `
      .green {
        background-color: green;
      }
      .align {
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {
  $counter = signal(0); //writable
  $is_prime = computed(() => {
    const number = this.$counter();
    if (number <= 1) return false;
    if (number <= 3) return true;
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) return false;
    }

    return true;
  });
  constructor() {
    setInterval(() => {
      this.$counter.update((old) => old + 1);
    }, 1000); //or oninit if you want//or this.counter.set(this.counter()+1)
    effect(() => {
      if (this.$is_prime())
        console.log(`found a prime number: ${this.$counter}`);
    });
  }
}
