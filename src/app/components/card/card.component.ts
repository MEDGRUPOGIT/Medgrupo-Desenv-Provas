import { ChangeDetectionStrategy, Component, Input, input, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Icon } from '../icons/icons.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { sign } from 'crypto';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatCheckboxModule, Icon],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {

  title = input();
  category = input('Cirurgia');
  schedule = input('14h00-16h00');
  icon = input('none');

}

