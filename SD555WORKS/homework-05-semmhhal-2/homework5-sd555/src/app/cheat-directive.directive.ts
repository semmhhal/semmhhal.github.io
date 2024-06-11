import { Directive, HostListener, input } from '@angular/core';

@Directive({
  selector: '[cheat]',
  standalone: true,
})
export class CheatDirectiveDirective {
  cheat = input.required<string>();
  @HostListener('dblclick') handle() {
    alert(this.cheat());
  }
}
