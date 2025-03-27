import { CommonModule } from '@angular/common';
import home from '../../../assets/data/home.json'
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  tarefas = home.tarefas; 

  constructor() {}

  isOpen: boolean = false;

  toggleTodoList(): void {
    this.isOpen = !this.isOpen;
  }
}
