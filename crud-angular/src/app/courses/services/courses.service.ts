import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }  //o Angular automaticamente instancia o httpClient, por conta do "@Injectable"

  listFindAll(){
    return this.httpClient.get<Course[]>(this.API) //o get retorna um Observable, por isso usamos o <> para especificar o tipo
      .pipe(                                       //o pipe é um canal de manipulacao de dados com os operadores RXJS
        first());                                  //o first é um operador RXJS, ira pegar apenas o primeiro objeto que o servidor irá retornar
  }
}
