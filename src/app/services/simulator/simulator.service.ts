import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISimulator } from '../../models/simulator.model';
import simulatorsData from './simulator.data';

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {

  constructor() { }


  getSimulators(): Observable<ISimulator[]> {
    return Observable.create(subscribe => {
      subscribe.next(simulatorsData())
    });
  }
}
