import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-todo-mobile',
  imports: [CardComponent, CommonModule],
  templateUrl: './section-todo-mobile.component.html',
  styleUrl: './section-todo-mobile.component.scss'
})
export class SectionTodoMobileComponent {
  @Input() tasks: Array<any> = [];

}
