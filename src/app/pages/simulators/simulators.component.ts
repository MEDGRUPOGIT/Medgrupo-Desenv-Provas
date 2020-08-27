import { Component, OnInit } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { SimulatorService } from 'src/app/services/simulator/simulator.service';
import { ITreeOptions } from '@circlon/angular-tree-component';
import { ISimulator, ISimulatorType, ISimulatorSelected } from 'src/app/models/simulator.model';

@Component({
  selector: 'app-simulators',
  templateUrl: './simulators.component.html',
  styleUrls: ['./simulators.component.scss']
})

export class SimulatorsComponent implements OnInit {

  simulatorSelected: ISimulatorSelected;


  constructor() { }
  ngOnInit(): void {

  }

  onChangeSimulator(simulatorSelected: ISimulatorSelected) {
    this.simulatorSelected = simulatorSelected;
  }

}
