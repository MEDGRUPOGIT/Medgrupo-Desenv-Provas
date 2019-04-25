import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraTopoComponent } from './barra-topo.component';

describe('BarraTopoComponent', () => {
  let component: BarraTopoComponent;
  let fixture: ComponentFixture<BarraTopoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraTopoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
