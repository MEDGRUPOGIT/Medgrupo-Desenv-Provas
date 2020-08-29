import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ISimulator } from '../../models/simulator.model';
import simulatorsData from './simulator.data';

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {

  simulatorsSubject = new BehaviorSubject<ISimulator[]>([]);
  simulators$ = this.simulatorsSubject.asObservable();

  constructor() { }

  genereteSimulatorDatabase(): Observable<ISimulator[]> {
    return Observable.create(subscribe => {
      const simulators = simulatorsData()
      this.simulatorsSubject.next(simulators);
      subscribe.next(simulators);
    });
  }
}
