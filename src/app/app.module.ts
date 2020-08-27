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
import { GradeService } from './services/grade/grade.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimulatorsComponent,
    SimulatorTreeComponent,
    SimulatorDetailsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    TreeModule,
    InputTextModule,
    ButtonModule,
    TableModule
  ],
  providers: [SimulatorService, GradeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
