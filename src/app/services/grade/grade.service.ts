import { Injectable } from '@angular/core';
import { IGrade } from '../../models/grade.model'
import { Observable, BehaviorSubject } from 'rxjs';
import GradesData from './grade.data';
import { ISimulator, ISimulatorSelected, ISimulatorType } from 'src/app/models/simulator.model';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private gradesSubject = new BehaviorSubject<IGrade[]>([]);
  grades$ = this.gradesSubject.asObservable();

  constructor() { }

  generateGradesDataBase(simulators: ISimulator[]): Observable<IGrade[]> {
    return Observable.create(subscribe => {
      const grades = GradesData(simulators)
      this.gradesSubject.next(grades);
      subscribe.next();
    });
  }

  getGradesOfSimulator({ simulator, type }: ISimulatorSelected): Observable<IGrade[]> {
    return this.grades$.pipe(map(grades => {
      return grades
        .filter(({ simulator_id, simulator_type_id }) => {
          return simulator_id === simulator.id && simulator_type_id === type.id
        }).sort((a, b) => b.value - a.value);
    }))
  }
}
