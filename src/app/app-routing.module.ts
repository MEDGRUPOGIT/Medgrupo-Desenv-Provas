import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { MontaProvasComponent } from '../app/monta-provas/monta-provas.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'monta-provas', component: MontaProvasComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
