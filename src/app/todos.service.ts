import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from 'todos/todo';

@Injectable()
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo> {
    return this.http
      .get<Todo>('/server/api/v1/todo');
  }
}

export const TodoServiceInjectables = [
  { provide: TodosService, useClass: TodosService}
];
