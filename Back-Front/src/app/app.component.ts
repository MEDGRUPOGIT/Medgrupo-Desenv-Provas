import { Component } from '@angular/core';
import { ResultadosService } from './resultados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BackFront';

  public bindSimulado: any = 'Nenhum simulado selecionado';
  public bindMarcador = false;

  public filtroEspecialidade = '';
  public filtroTurma = '';
  public filtroFilial = '';

  tfonte: number = 15;

  matrBusca;
  resulBusca: any = [];
  

  resultados: { id: number; nota: number; matricula: number; especialidade: string; turma: string; filial: string; }[];

  constructor(service: ResultadosService) {
    this.resultados = service.getResultados();
  }

  buscaMatr() {
    this.resulBusca = this.resultados.filter(el => el.matricula == this.matrBusca).map(el => el.nota);
  }

  attEspecialidade(event: any){
    this.filtroEspecialidade = event.target.value;
  }

  attTurma(event: any){
    this.filtroTurma = event.target.value;
  }

  attFilial(event: any){
    this.filtroFilial = event.target.value;
  }

  aumentarFonte() {
    this.tfonte = this.tfonte + 1;
  }

  diminuirFonte() {
    this.tfonte = this.tfonte - 1;
  }

}
