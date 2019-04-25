import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarraTopoComponent } from './barra-topo/barra-topo.component';
import { MenuSimuladosComponent } from './menu-simulados/menu-simulados.component';
import { BarraSimuladosComponent } from './barra-simulados/barra-simulados.component';
import { RankingComponent } from './ranking/ranking.component';
import { SimuladosService } from './simulados.service';
import { ResultadosService } from './resultados.service';

@NgModule({
  declarations: [
    AppComponent,
    BarraTopoComponent,
    MenuSimuladosComponent,
    BarraSimuladosComponent,
    RankingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    SimuladosService,
    ResultadosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
