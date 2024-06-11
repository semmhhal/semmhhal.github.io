import { Component, computed, signal, effect } from '@angular/core';
import { count } from 'rxjs';
import { ShortenPipe } from './shorten.pipe';
import { SwapLettersPipe } from './swap-letters.pipe';

@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [ShortenPipe, SwapLettersPipe],
  template: `
    <h1>HomeWork-2</h1>
    <h4>Counter: {{ $count() }}</h4>
    @if(is_Prime()){
    <h1>Status:</h1>
    <h4>{{ $count() }} is Prime Number.</h4>
    }@else{
    <h2>Status:</h2>
    <h4>{{ $count() }} is not Prime Number</h4>
    }

    <h3>{{ 'Welcome to SD555 course' | shorten : 25 }}</h3>
    <h3>{{ 'Welcome to SD555 course' | shorten : 10 }}</h3>
    <h3>{{ 'Asaad and Theo' | swapLetters : { a: '@', o: '0' } }}</h3>
  `,
  styles: ``,
})
export class NumbersComponent {
  $count = signal<number>(0);
  is_Prime = computed(() => {
    const val = this.$count();
    for (let i = 2, s = Math.sqrt(val); i <= s; i++) {
      if (val % i === 0) return false;
    }
    return true;
  });
  constructor() {
    setInterval(() => {
      this.$count.update((prev) => prev + 1);
    }, 1000);

    effect(() => {
      if (this.is_Prime()) {
        console.log(`Found a prime number: ${this.$count()}`);
      }
    });
  }
}
