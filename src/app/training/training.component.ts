import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  hide: boolean = true;

  constructor() {}

  onselect() {
    const treinamento2 = document.getElementById('bt2');
    if (this.hide){
      treinamento2.classList.toggle('show-terinamento');
    }
  }

  ngOnInit(): void {

  }

}
