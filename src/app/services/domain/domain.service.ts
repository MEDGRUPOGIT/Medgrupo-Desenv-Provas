import { Injectable } from '@angular/core';
import { IEntity } from '../../models/utils.model';
import { specialties, branches, classes } from './domain.data'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  private specialtiesSubject = new BehaviorSubject<IEntity[]>(specialties);
  specialties$ = this.specialtiesSubject.asObservable();

  private branchesSubject = new BehaviorSubject<IEntity[]>(branches);
  branches$ = this.branchesSubject.asObservable();

  private classesSubject = new BehaviorSubject<IEntity[]>(classes);
  classes$ = this.classesSubject.asObservable();

  constructor() { }
}

