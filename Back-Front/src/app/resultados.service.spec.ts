import { TestBed } from '@angular/core/testing';

import { ResultadosService } from './resultados.service';

describe('ResultadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultadosService = TestBed.get(ResultadosService);
    expect(service).toBeTruthy();
  });
});
