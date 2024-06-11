import {
  NgClass,
  NgStyle,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
interface Student {
  _id: string;
  name: string;
  parsed?: number;
}
@Component({
  selector: 'app-students',
  standalone: true,
  imports: [NgClass, NgStyle, TitleCasePipe, SlicePipe],
  template: ` @for(student of students; track student._id) {
    <!-- //@for(student of
    students;track student._id;let odd=$odd){
    <li [ngClass]="{ grey: odd }">
      {{((student.length>5)? student.name | slice : 0 : 5)+ '...': (student.name))| titlecase }}
    </li>
    }  -->

    @if(student.name.length>20){
    <li [ngClass]="{ grey: student.parsed! % 2 != 0, font: true }">
      {{ student.name | slice : 0 : 20 | titlecase }}...
    </li>
    }@else {
    <li
      [ngClass]="{
        grey: student.parsed! % 2 != 0,
        white: student.parsed! % 2 == 0,
        font: true
      }"
    >
      {{
        student.name.length > 20
          ? (student.name | slice : 0 : 20 | titlecase) + '...'
          : (student.name | titlecase)
      }}
    </li>
    } }`,
  styles: `.grey{background-color:#9E9E9E}, .white{background-color: #000000} .font{font-size:26px}`,
})
export class StudentsComponent {
  students: Student[] = [
    { _id: '1', name: 'asaad saad' },
    { _id: '2', name: 'theo saad' },
    { _id: '3', name: 'mike saad' },
    { _id: '4', name: 'mada saad' },
    { _id: '5', name: 'Alexandria Catherine Johnson' },
    { _id: '6', name: 'Elizabeth Alexandra Thompson' },
    { _id: '7', name: 'Frederick Benjamin Harrison' },
    { _id: '8', name: 'Isabella Samantha Robertson' },
  ];

  constructor() {
    this.students.forEach((student) => {
      student.parsed = parseInt(student._id);
    });
  }
}
