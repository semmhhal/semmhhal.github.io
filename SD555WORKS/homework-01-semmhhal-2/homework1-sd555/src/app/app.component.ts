import { Component } from '@angular/core';
import { StudentsComponent } from './students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentsComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <app-students />
  `,
  styles: [],
})
export class AppComponent {
  title = 'homework1-sd555';
}
