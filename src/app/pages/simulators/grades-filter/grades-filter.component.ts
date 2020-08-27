import { Component, OnInit } from '@angular/core';
import { DomainService } from 'src/app/services/domain/domain.service';
import { IEntity } from 'src/app/models/utils.model';

@Component({
  selector: 'app-grades-filter',
  templateUrl: './grades-filter.component.html',
  styleUrls: ['./grades-filter.component.scss']
})
export class GradesFilterComponent implements OnInit {

  specialtySelected: IEntity;
  branchSelected: IEntity;
  classSelected: IEntity;

  specialtiesOptions: IEntity[]
  branchesOptions: IEntity[]
  classesOptions: IEntity[]


  constructor(private domainServices: DomainService) { }

  ngOnInit(): void {
    this.specialtiesOptions = this.domainServices.getSpecialties();
    this.branchesOptions = this.domainServices.getBranches();
    this.classesOptions = this.domainServices.getClasses();
  }

}
