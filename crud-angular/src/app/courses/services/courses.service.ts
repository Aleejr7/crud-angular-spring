import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(httpCliente: HttpClient) { }  //o Angular automaticamente instancia o httpClient, por conta do "@Injectable"

  listFindAll(): Course[] {
    return [
      {_id: "1", name: 'Angular', category: 'Front-End'}
    ]
  }
}
