import { Component } from '@angular/core';
import { StudentsComponent } from './students.component';
import { NumbersComponent } from './numbers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentsComponent, NumbersComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <app-students />
    <app-numbers />
  `,
  styles: [],
})
export class AppComponent {
  title = 'hw1-2-3-demo';
}
