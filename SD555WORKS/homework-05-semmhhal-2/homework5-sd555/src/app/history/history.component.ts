import { NgStyle } from '@angular/common';
import { Component, signal, effect, inject } from '@angular/core';
import IHistory from '../history.type';
import { Title } from '@angular/platform-browser';
import { GameServicesService } from '../game-services.service';
@Component({
  selector: 'app-history',
  standalone: true,
  imports: [NgStyle],
  template: `
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
      @for(history of gameStateService.$history(); track history; let odd=$odd){
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
    }
  `,
  styles: ``,
})
export class HistoryComponent {
  gameStateService = inject(GameServicesService);
  $display_history = signal<boolean>(false);
  #title = inject(Title);

  constructor() {
    effect(() => {
      this.#title.setTitle(
        `Number of iterations: ${this.gameStateService.$history().length}`
      );
    });
  }

  reset() {
    this.gameStateService.$game_state.set({ Wins: 0, Losses: 0 });
    this.gameStateService.$history.set([]);
    localStorage.clear();
  }
}
