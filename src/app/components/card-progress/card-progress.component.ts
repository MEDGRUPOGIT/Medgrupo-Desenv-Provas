import { Component } from '@angular/core';
import home from '../../../assets/data/home.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-progress.component.html',
  styleUrl: './card-progress.component.scss'
})
export class CardProgressComponent {

   parcial = home.parcial;
}
