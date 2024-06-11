import { GameServicesService } from './game-services.service';

export function initializeGameState(gameStateService: GameServicesService) {
  return () => gameStateService.loadStateFromLocalStorage();
}
