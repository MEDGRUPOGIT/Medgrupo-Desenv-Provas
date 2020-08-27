import { Component, OnInit } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { SimulatorService } from 'src/app/services/simulator/simulator.service';
import { ITreeOptions } from '@circlon/angular-tree-component';
import { ISimulator, ISimulatorType, ISimulatorSelected } from 'src/app/models/simulator.model';
import { IGrade } from 'src/app/models/grade.model';
import { GradeService } from 'src/app/services/grade/grade.service';

@Component({
  selector: 'app-simulators',
  templateUrl: './simulators.component.html',
  styleUrls: ['./simulators.component.scss']
})



export class SimulatorsComponent implements OnInit {

  simulatorSelected: ISimulatorSelected;
  grades: IGrade[]

  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.grades = this.gradeService.getGrades().sort((a, b) => b.value - a.value);
  }

  onChangeSimulator(simulatorSelected: ISimulatorSelected) {
    this.simulatorSelected = simulatorSelected;
  }


}
