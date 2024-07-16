import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses: Course[] = [
    {_id: "1", name: 'Angular', category: 'Front-End'}
  ];
  displayedColumns = ['name', 'category']

  constructor() {
   // this.courses = [];
  }
}
