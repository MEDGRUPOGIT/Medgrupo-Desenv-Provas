import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { InlineSVGModule } from 'ng-inline-svg';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    HttpClientModule,
    // AngularSvgIconModule.forRoot(),
    BrowserModule,
    MatIconModule,
    AppComponent,
    InlineSVGModule.forRoot(),
    AppComponent
  ],
  providers: [],
  // bootstrap: [AppComponent],
})
export class AppModule { }

