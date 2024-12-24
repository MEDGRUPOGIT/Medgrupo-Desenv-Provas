import { Component, Input, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { ConfigurableFocusTrapFactory, FocusTrapFactory } from '@angular/cdk/a11y';
import { CardComponent } from '../card/card.component';

/** @title Sidenav using injected ConfigurableFocusTrap */
@Component({
  selector: 'app-todayTodoList',
  templateUrl: 'today-to-do-list.component.html',
  styleUrl: 'today-to-do-list.component.scss',
  imports: [MatSidenavModule, CommonModule, MatButtonModule, MatRadioModule, FormsModule, ReactiveFormsModule, CardComponent],
  providers: [{ provide: FocusTrapFactory, useClass: ConfigurableFocusTrapFactory }],
})
export class TodayTodoList {
  @Input() tasks: Array<any> = [];
  showFiller = false;
  mode: MatDrawerMode = 'side';
  opened = false;
  end = false;
  shouldRun = true;


}
