import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AsideBarComponent } from './components/aside-bar/aside-bar.component';
import { CardMainComponent } from './components/card-main/card-main.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
},
{
  path: '',
  component: AsideBarComponent
},
{
  path: '',
  component: CardMainComponent
}
];
