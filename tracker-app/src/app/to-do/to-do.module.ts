import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ToDoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule
  ],
  exports: []
})
export class ToDoModule { }
