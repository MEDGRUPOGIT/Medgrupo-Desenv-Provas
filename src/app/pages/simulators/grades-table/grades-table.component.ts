import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IGrade } from 'src/app/models/grade.model';
import { IEntity } from 'src/app/models/utils.model';
import { DomainService } from 'src/app/services/domain/domain.service';
import { Table } from 'primeng/table';
import { branches, specialties } from 'src/app/services/domain/domain.data';

@Component({
  selector: 'app-grades-table',
  templateUrl: './grades-table.component.html',
  styleUrls: ['./grades-table.component.scss']
})
export class GradesTableComponent implements OnInit {

  @ViewChild('dataTable') table: Table;
  @Input() grades: IGrade[]
  gradesFiltered: IGrade[]
  rows: number = 10;
  page: 1;

  specialtiesOptions: IEntity[]
  branchesOptions: IEntity[]
  classesOptions: IEntity[]

  constructor(private domainServices: DomainService) { }

  ngOnInit(): void {
    this.specialtiesOptions = this.domainServices.getSpecialties();
    this.branchesOptions = this.domainServices.getBranches();
    this.classesOptions = this.domainServices.getClasses();
    this.grades = this.setPositionInGrades(this.grades);
    this.gradesFiltered = this.grades;
  }

  setPositionInGrades(grades = []) {
    let currentPosition = 1;
    return grades
      .map((grade: IGrade, index: number, grades: IGrade[]) => {
        if (index && grade.value !== grades[index - 1].value) {
          currentPosition++
        }
        return { ...grade, position: currentPosition }
      })
  }

  onMultipleFilterChange(event, key): void {
    this.table.filter(event.value, key, 'in');
  }

  onFilter({
    branchSelected = [],
    classSelected = [],
    specialtySelected = []
  }) {

    this.table.filter(branchSelected, 'branch', 'in');
    this.table.filter(classSelected, 'class', 'in');
    this.table.filter(specialtySelected, 'specialty', 'in');
  }

  onTableFilter({ filteredValue }) {
    this.gradesFiltered = this.setPositionInGrades(filteredValue)
  }

  onSearch(enrollmentValue) {
    if(!enrollmentValue) return this.table.first = 1
    const index = this.gradesFiltered
      .findIndex(({ enrollment }) => enrollment === Number(enrollmentValue));
    this.table.first = index;
  }
}
