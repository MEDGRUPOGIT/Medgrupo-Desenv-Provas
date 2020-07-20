import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const acc = document.querySelectorAll('.accordion');
    let i: number;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.height) {
          panel.style.height = null;
        } else {
          panel.classList.toggle('painel-toggle');
        }
      });
    }
  }

}
