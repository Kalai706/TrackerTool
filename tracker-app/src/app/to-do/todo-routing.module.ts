import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes = [{

  path:'todo',children:[
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: '**',
    component: TodoListComponent
  }
]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: []
  })
export class ToDoRoutingModule{ }