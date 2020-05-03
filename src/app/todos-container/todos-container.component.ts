import { Component, OnInit, HostBinding } from '@angular/core';
import { Todo } from 'todos/todo';

@Component({
  selector: 'todos',
  template: `
    <todo *ngFor="let todo of todos"
        [item] = "todo"></todo>
  `
})
export class TodosContainerComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'ui middle aligned selection list';
  todos: Todo[] = [];

  constructor() {
    this.todos.push( { title: 'hello 1', description: 'Description of todo', completed: false });
    this.todos.push( { title: 'hello 2', description: 'Description of todo', completed: false });
    this.todos.push( { title: 'hello 3', description: 'Description of todo', completed: false });
  }

  ngOnInit() {
  }

}
