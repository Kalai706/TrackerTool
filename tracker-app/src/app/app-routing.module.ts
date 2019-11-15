import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TodoListComponent } from './to-do/todo-list/todo-list.component';

const routes = [
  {
    path: 'admin',
    component: AdminComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }