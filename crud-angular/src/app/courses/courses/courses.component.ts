import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',  //tag que usamos no HTML
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses: Course[] = [
    {_id: "1", name: 'Angular', category: 'Front-End'}
  ];
  displayedColumns = ['name', 'category'];

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
   //this.courses = [];
   //this.coursesService = new CoursesService();
   this.courses = this.coursesService.listFindAll();
  }
}
