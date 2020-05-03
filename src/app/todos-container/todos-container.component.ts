import { Component, OnInit, HostBinding } from '@angular/core';
import { Todo } from 'todos/todo';
import { Observable } from 'rxjs';
import { TodosService } from '../todos.service';

@Component({
  selector: 'todos',
  template: `
    <todo *ngFor="let todo of todos | async"
        [item] = "todo"></todo>
  `
})
export class TodosContainerComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'ui middle aligned selection list';
  todos: Observable<Todo>;

  constructor(private todoService: TodosService) {
    this.todos = todoService.getTodos();
   }

  ngOnInit() {
  }

}
