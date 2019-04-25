import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SimuladosService } from '../simulados.service';

@Component({
  selector: 'menu-simulados',
  templateUrl: './menu-simulados.component.html',
  styleUrls: ['./menu-simulados.component.css']
})
export class MenuSimuladosComponent implements OnInit {

  simulados = [];

  sim = '';
  marcadorAtivacao = false;

  @Output() public bindSim = new EventEmitter();
  @Output() public bindMarcador = new EventEmitter();

  constructor(service: SimuladosService) {
    this.simulados = service.getSimulados();
  }

  enviarDado(tipo, dado) {
    this.marcadorAtivacao = true;

    if (tipo == 1) {
      this.sim = 'SIMULADO ' + dado + ' - PROVA OBJETIVA';
    } else if (tipo == 2) {
      this.sim = 'SIMULADO ' + dado + ' - PROVA FINAL';
    } else {
      this.sim = 'NENHUM SIMULADO SELECIONADO';
    }

    this.bindSim.emit(this.sim);
    this.bindMarcador.emit(this.marcadorAtivacao);
  }

  ngOnInit() {
  }

}
