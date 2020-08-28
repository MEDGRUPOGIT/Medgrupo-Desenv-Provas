import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SimulatorsComponent } from './pages/simulators/simulators.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimulatorService } from './services/simulator/simulator.service'
import { SimulatorTreeComponent } from './pages/simulators/simulator-tree/simulator-tree.component';
import { SimulatorDetailsComponent } from './pages/simulators/simulator-details/simulator-details.component';
import { TreeModule } from 'primeng/tree';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';

import { GradeService } from './services/grade/grade.service'
import { DomainService } from './services/domain/domain.service';
import { GradesFilterComponent } from './pages/simulators/grades-table/grades-filter/grades-filter.component';
import { EnrollmentSearchComponent } from './pages/simulators/grades-table/enrollment-search/enrollment-search.component';
import { GradesTableComponent } from './pages/simulators/grades-table/grades-table.component'
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimulatorsComponent,
    SimulatorTreeComponent,
    SimulatorDetailsComponent,
    GradesFilterComponent,
    EnrollmentSearchComponent,
    GradesTableComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    TreeModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    MultiSelectModule,
    PaginatorModule],
  providers: [SimulatorService, GradeService, DomainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
