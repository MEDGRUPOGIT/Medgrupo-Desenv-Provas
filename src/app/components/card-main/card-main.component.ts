import { Component } from '@angular/core';
import home from '../../../assets/data/home.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-main.component.html',
  styleUrl: './card-main.component.scss'
})
export class CardMainComponent {
  conteudos = home.conteudos;


}
