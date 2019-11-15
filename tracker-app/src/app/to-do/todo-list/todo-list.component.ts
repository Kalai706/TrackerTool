import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList = [
    {"no":"1","task":"task1","status":true},
    {"no":"2","task":"task2","status":false}
  ];

  constructor() { }

  ngOnInit() {
  }
}
