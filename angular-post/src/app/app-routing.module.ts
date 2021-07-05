import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodosComponent} from "./component/todos/todos.component";
import {UsersComponent} from "./component/users/users.component";
import {PostComponent} from "./component/post/post.component";

const routes: Routes = [
  {
    path:'component/todos',
    component: TodosComponent
  },
  {
    path:'component/users',
    component: UsersComponent
  },
  {
    path:'component/post',
    component: PostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
