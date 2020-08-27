import { Injectable } from '@angular/core';
import { IEntity } from '../../models/utils.model';
import { specialties, branches, classes } from './domain.data'

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor() { }

  getSpecialties(): IEntity[] {
    return specialties
  };

  getBranches(): IEntity[] {
    return branches
  };

  getClasses(): IEntity[] {
    return classes
  };
}

