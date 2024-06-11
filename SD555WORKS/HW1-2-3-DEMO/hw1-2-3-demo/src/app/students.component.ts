import { Component, signal } from '@angular/core';
import Student from './student.types';
import { NgStyle, SlicePipe, TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-students',
  standalone: true,
  imports: [NgStyle, TitleCasePipe, SlicePipe],
  template: `
    <h1>HomeWork-1</h1>
    @for(student of $students(); track student._id; let odd=$odd){
    <ul>
      <li [ngStyle]="{ 'background-color': odd ? '#ffffff' : '#dddddd' }">
        <!-- @if(student.name.length>=20){
        {{ student.name | slice : 0 : 20 | titlecase }}... }
        @else {
        {{ student.name | titlecase }}
        } -->

        {{
          student.name.length >= 20
            ? (student.name | slice : 0 : 20 | titlecase) + '...'
            : (student.name | titlecase)
        }}
      </li>
    </ul>
    }
  `,
  styles: ``,
})
export class StudentsComponent {
  $students = signal<Student[]>([
    { _id: '1', name: 'asaad saad' },
    { _id: '2', name: ' Jonathan Alexander Bartholomew' },
    { _id: '3', name: 'mike saad' },
    { _id: '4', name: 'mada saad' },
    { _id: '5', name: 'Jonathan Alexander Bartholomew' },
    { _id: '6', name: 'Theo Saad' },
    { _id: '7', name: ' Elizabeth Alexandria Kensington' },
  ]);
}
