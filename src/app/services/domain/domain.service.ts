import { Injectable } from '@angular/core';
import { IEntity } from '../../models/utils.model';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor() { }

  getSpecialties(): IEntity[] {
    return [{
      name: 'Clínica Médica',
      id: 1
    }, {
      name: 'Cirurgia Geral',
      id: 2
    }]
  };

  getBranches(): IEntity[] {
    return [{
      name: 'Salvador (BA)',
      id: 1
    }, {
      name: 'São Paulo (SP)',
      id: 2
    }]
  };

  getClasses(): IEntity[] {
    return [{
      name: '2008 MEDCURSO SALVADOR - Turma A/2008 MED SALVADOR',
      id: 1
    }, {
      name: '2008 MEDCURSO SÃO PAULO TURMA A/2008 MED SÃO PAULO TURMA A',
      id: 2
    }]
  };


}
