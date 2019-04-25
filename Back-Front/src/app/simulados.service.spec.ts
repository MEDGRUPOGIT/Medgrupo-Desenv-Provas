import { TestBed } from '@angular/core/testing';

import { SimuladosService } from './simulados.service';

describe('SimuladosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimuladosService = TestBed.get(SimuladosService);
    expect(service).toBeTruthy();
  });
});
