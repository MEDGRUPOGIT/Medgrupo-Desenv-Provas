import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraSimuladosComponent } from './barra-simulados.component';

describe('BarraSimuladosComponent', () => {
  let component: BarraSimuladosComponent;
  let fixture: ComponentFixture<BarraSimuladosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraSimuladosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraSimuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
