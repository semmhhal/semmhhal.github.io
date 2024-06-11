import { NgStyle } from '@angular/common';
import { Component, signal, effect } from '@angular/core';
import IHistory from './history.type';
import { CheatDirectiveDirective } from './cheat-directive.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgStyle, CheatDirectiveDirective],
  template: `
    <div align="center">
      <h1>HEX Color Guessing Game</h1>
      <button (click)="$display_history.set(!$display_history())">
        Show/Hide History
      </button>
      @if($display_history()){
      <button (click)="reset()">reset</button>
      <table>
        <tr>
          <th>computer</th>
          <th>human</th>
          <th>wins</th>
          <th>losses</th>
        </tr>
        @for(history of $history(); track history; let odd=$odd){
        <tr [ngStyle]="{ 'background-color': odd ? '#eeeeee' : '#ffffff' }">
          <td>{{ history.computer }}</td>
          <td>{{ history.human }}</td>
          <td>{{ history.Wins }}</td>
          <td>{{ history.Losses }}</td>
        </tr>
        }@empty {
        <tr>
          <td colspan="4">Play to see history...</td>
        </tr>

        }
      </table>
      }@else{
      <div>
        Wins:{{ $game_state().Wins }}, Losses:{{ $game_state().Losses }}
      </div>
      <div
        id="color_space"
        [ngStyle]="{ 'background-color': $displayed_color() }"
        [cheat]="$displayed_color()"
      ></div>
      @for (color of $colors(); track color) {
      <button (click)="answer(color)" [disabled]="$history().length >= 10">
        {{ color }}
      </button>
      }}
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
  $game_state = signal({ Wins: 0, Losses: 0 });
  $colors = signal<string[]>([]);
  $displayed_color = signal('#ffffff');
  $history = signal<IHistory[]>([]);
  $display_history = signal<boolean>(false);

  constructor() {
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
    this.#pick_new_colors();
    effect(() => {
      localStorage.setItem('hex', JSON.stringify(this.$history()));
    });
  }
  #pick_new_colors() {
    const colors = [
      this.#generateRandomHexColor(),
      this.#generateRandomHexColor(),
      this.#generateRandomHexColor(),
    ];
    const display = this.#getRandomItemFromArray(colors);
    this.$colors.set(colors);
    this.$displayed_color.set(display);
  }

  answer(color: string) {
    if (color === this.$displayed_color()) {
      this.$game_state.update((oldstate) => ({
        ...oldstate,
        Wins: oldstate.Wins + 1,
      }));
    } else {
      this.$game_state.update((oldstate) => ({
        ...oldstate,
        Losses: oldstate.Losses + 1,
      }));
    }
    // this.$history().push({
    //   human: color,
    //   computer: this.$displayed_color(),
    //   Wins: this.$game_state().Wins,
    //   Losses: this.$game_state().Losses,
    // });
    //OR
    this.$history.update((old_history) => [
      ...old_history,
      {
        human: color,
        computer: this.$displayed_color(),
        Wins: this.$game_state().Wins,
        Losses: this.$game_state().Losses,
      },
    ]);
    console.log(this.$history());
    this.#pick_new_colors();
  }

  reset() {
    this.$game_state.set({ Wins: 0, Losses: 0 });
    this.$history.set([]);
    localStorage.clear();
  }
  #generateRandomHexColor(): string {
    return (
      '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
    );
  } //generate random hex color

  #getRandomItemFromArray(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  } //pick one random item from an array
}
