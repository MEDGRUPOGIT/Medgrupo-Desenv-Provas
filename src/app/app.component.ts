import { Component } from '@angular/core';
import { SimulatorService } from './services/simulator/simulator.service';
import { GradeService } from './services/grade/grade.service';
import { mergeMap } from 'rxjs/operators';
import { ISimulator } from './models/simulator.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'medgroup-simulator';

  constructor(
    private simulatorService: SimulatorService,
    private gradeService: GradeService
  ) {
    this.loadDataBase();
  }

  loadDataBase() {
    this.simulatorService.genereteSimulatorDatabase()
      .pipe(mergeMap((simulators: ISimulator[]) => {
        return this.gradeService.generateGradesDataBase(simulators)
      })).subscribe()
  }
}
