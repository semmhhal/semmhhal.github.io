import { NgStyle } from '@angular/common';
import { Component, signal, effect, inject } from '@angular/core';
import { CheatDirectiveDirective } from '../cheat-directive.directive';
import IHistory from '../history.type';
import { Title } from '@angular/platform-browser';
import { GameServicesService } from '../game-services.service';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgStyle, CheatDirectiveDirective],
  template: `
    <div>
      Wins:{{ gameStateService.$game_state().Wins }}, Losses:{{
        gameStateService.$game_state().Losses
      }}
    </div>
    <div
      id="color_space"
      [ngStyle]="{ 'background-color': gameStateService.$displayed_color() }"
      [cheat]="gameStateService.$displayed_color()"
    ></div>
    @for (color of gameStateService.$colors(); track color) {
    <button
      (click)="answer(color)"
      [disabled]="gameStateService.$history().length >= 10"
    >
      {{ color }}
    </button>
    }
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
export class GameComponent {
  #title = inject(Title);
  gameStateService = inject(GameServicesService);

  constructor() {
    this.gameStateService.pickNewColors();
  }

  answer(color: string) {
    if (color === this.gameStateService.$displayed_color()) {
      this.gameStateService.$game_state.update((oldstate) => ({
        ...oldstate,
        Wins: oldstate.Wins + 1,
      }));
      this.#title.setTitle(`Wins:${this.gameStateService.$game_state().Wins}`);
    } else {
      this.gameStateService.$game_state.update((oldstate) => ({
        ...oldstate,
        Losses: oldstate.Losses + 1,
      }));
      this.#title.setTitle(
        `Losses:${this.gameStateService.$game_state().Losses}`
      );
    }

    this.gameStateService.$history.update((old_history) => [
      ...old_history,
      {
        human: color,
        computer: this.gameStateService.$displayed_color(),
        Wins: this.gameStateService.$game_state().Wins,
        Losses: this.gameStateService.$game_state().Losses,
      },
    ]);
    console.log(this.gameStateService.$history());
    this.gameStateService.pickNewColors();
  }

  reset() {
    this.gameStateService.$game_state.set({ Wins: 0, Losses: 0 });
    this.gameStateService.$history.set([]);
    localStorage.clear();
  }
}
