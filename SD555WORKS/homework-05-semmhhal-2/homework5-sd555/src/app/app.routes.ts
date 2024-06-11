import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HistoryComponent } from './history/history.component';
import { ErrorComponent } from './error-comp/error-comp.component';

export const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    pathMatch: 'full',
  },
  {
    path: 'game',
    component: GameComponent,
    pathMatch: 'full',
  },
  { path: 'history', component: HistoryComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '' },
];
