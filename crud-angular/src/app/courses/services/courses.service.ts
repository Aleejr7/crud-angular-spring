import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }  //o Angular automaticamente instancia o httpClient, por conta do "@Injectable"

  listFindAll(){
    return this.httpClient.get<Course[]>(this.API); //o get retorna um Observable, por isso usamos o <> para especificar o tipo
      //.pipe(            // `cano` aonde se passa os dados e manipular os dados caso seja necessário
      //  tap(courses: Course => console.log(courses))           // tap é o operador do RXJS
      //)
  }
}
