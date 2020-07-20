import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { RankingComponent } from './ranking/ranking.component';
import { TrainingComponent } from './training/training.component';
import { AppRoutingModule } from './app-routing.module';
import { MontaProvasComponent } from './monta-provas/monta-provas.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    RankingComponent,
    TrainingComponent,
    MontaProvasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
