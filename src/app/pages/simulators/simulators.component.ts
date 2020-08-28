import { Component, OnInit } from '@angular/core';
import { ISimulatorSelected } from 'src/app/models/simulator.model';
import { IGrade } from 'src/app/models/grade.model';
import { GradeService } from 'src/app/services/grade/grade.service';
import { BehaviorSubject, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-simulators',
  templateUrl: './simulators.component.html',
  styleUrls: ['./simulators.component.scss']
})

export class SimulatorsComponent implements OnInit {

  simulatorSelected: ISimulatorSelected;
  grades: IGrade[]

  private simuladorSelect$ = new BehaviorSubject<ISimulatorSelected>(null);

  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.simuladorSelect$.pipe(mergeMap((simulatorSelected: ISimulatorSelected) => {
      if (!simulatorSelected) return from([])
      this.simulatorSelected = simulatorSelected;
      return this.gradeService.getGradesOfSimulator(simulatorSelected)
    })).subscribe(grades => {
      this.grades = grades;
    })
  }

  onChangeSimulator(simulatorSelected: ISimulatorSelected) {
    if(simulatorSelected !== this.simulatorSelected){
      this.simuladorSelect$.next(simulatorSelected)
    }
  }
}
