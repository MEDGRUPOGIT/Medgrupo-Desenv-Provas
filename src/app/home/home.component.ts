import { Component } from '@angular/core';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { TodayTodoList } from '../components/today-to-do-list/today-to-do-list.component';
import dataJson from '../../data/home.json';
import { FooterMobileComponent } from '../components/footer-mobile/footer-mobile.component';
import { SectionTodoMobileComponent } from '../components/section-todo-mobile/section-todo-mobile.component';

@Component({
  selector: 'app-home',
  imports: [SidebarComponent, TodayTodoList, FooterMobileComponent,SectionTodoMobileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  navItems = dataJson.navigation;
  user = dataJson.user;
  contents = dataJson.conteudos;
  tasks = dataJson.tarefas;

}
