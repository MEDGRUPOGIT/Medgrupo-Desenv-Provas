import { Component, OnInit, Input } from '@angular/core';
import { ISimulatorSelected } from 'src/app/models/simulator.model';

@Component({
  selector: 'app-simulator-details',
  templateUrl: './simulator-details.component.html',
  styleUrls: ['./simulator-details.component.scss']
})
export class SimulatorDetailsComponent implements OnInit {
  @Input() simulator: ISimulatorSelected

  constructor() { }

  ngOnInit(): void {
  }

}
