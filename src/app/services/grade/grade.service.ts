import { Injectable } from '@angular/core';
import { IGrade } from '../../models/grade.model'
import GradesData from './grade.data';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor() { }


  getGrades(): IGrade[] {
    return GradesData();
  }
}
