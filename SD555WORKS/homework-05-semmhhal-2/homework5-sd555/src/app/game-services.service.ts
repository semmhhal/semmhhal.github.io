import { Injectable, signal } from '@angular/core';
import IHistory from './history.type';

@Injectable({
  providedIn: 'root',
})
export class GameServicesService {
  $game_state = signal({ Wins: 0, Losses: 0 });
  $colors = signal<string[]>([]);
  $displayed_color = signal('#ffffff');
  $history = signal<IHistory[]>([]);

  constructor() {}

  loadStateFromLocalStorage() {
    const stored_history = localStorage.getItem('hex');
    if (stored_history) {
      const parsed_stored_history = JSON.parse(stored_history);
      if (parsed_stored_history.length) {
        this.$history.set(parsed_stored_history);
        this.$game_state.set({
          Wins: parsed_stored_history.at(-1).Wins,
          Losses: parsed_stored_history.at(-1).Losses,
        });
      }
    }
  }

  saveStateToLocalStorage() {
    localStorage.setItem('hex', JSON.stringify(this.$history()));
  }

  pickNewColors() {
    const colors = [
      this.generateRandomHexColor(),
      this.generateRandomHexColor(),
      this.generateRandomHexColor(),
    ];
    const display = this.getRandomItemFromArray(colors);
    this.$colors.set(colors);
    this.$displayed_color.set(display);
  }

  generateRandomHexColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getRandomItemFromArray<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
}
