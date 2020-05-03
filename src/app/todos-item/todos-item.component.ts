import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Todo } from 'todos/todo';

@Component({
  selector: 'todo',
  template: `
    <i class="large github middle aligned icon"></i>
    <div class="content">
      <a class="header">{{item.title}}</a>
      <div class="description">{{item.description}}</div>
    </div>
  `
})
export class TodosItemComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'item'
  @Input() item: Todo;

  constructor() { }

  ngOnInit() {
  }

}
