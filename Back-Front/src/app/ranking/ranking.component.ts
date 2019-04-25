import { Component, OnInit, Input } from '@angular/core';
import { ResultadosService } from '../resultados.service';

@Component({
  selector: 'ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  @Input('parentData') public filtros;
  // @Input('parentData') public filtroTurma;
  // @Input('parentData') public filtroFilial;

  resultados: any;
  rfiltrado: any;

  constructor(service: ResultadosService) {
    this.resultados = service.getResultados();
  }

  ngOnChanges() {
    if (!this.filtros[0] && !this.filtros[1]) {
      this.rfiltrado = this.resultados.filter(x => x.filial == this.filtros[2]);
    }
    else if (!this.filtros[0] && !this.filtros[2]) {
      this.rfiltrado = this.resultados.filter(x => x.turma == this.filtros[1]);
    }
    else if (!this.filtros[1] && !this.filtros[2]) {
      this.rfiltrado = this.resultados.filter(x => x.especialidade == this.filtros[0]);
    }
    else if (!this.filtros[0]) {
      this.rfiltrado = this.resultados.filter(x => x.turma == this.filtros[1] && x.filial == this.filtros[2]);
    }
    else if (!this.filtros[1]) {
      this.rfiltrado = this.resultados.filter(x => x.especialidade == this.filtros[0] && x.filial == this.filtros[2]);
    }
    else if (!this.filtros[2]) {
      this.rfiltrado = this.resultados.filter(x => x.especialidade == this.filtros[0] && x.turma == this.filtros[1]);
    }
    else if (!this.filtros[0] && !this.filtros[1] && !this.filtros[2]) {
      this.showAll();
    }
    else {
      this.rfiltrado = this.resultados.filter(
        x => x.especialidade == this.filtros[0] 
        && x.turma == this.filtros[1] 
        && x.filial == this.filtros[2]
      );
    }
    this.rfiltrado.sort(function (a, b) { return b.nota - a.nota });
  }

  showAll() {
    this.rfiltrado = this.resultados;
    this.rfiltrado.sort(function (a, b) { return b.nota - a.nota });
  }

  ngOnInit() {
    this.showAll();
  }

}


