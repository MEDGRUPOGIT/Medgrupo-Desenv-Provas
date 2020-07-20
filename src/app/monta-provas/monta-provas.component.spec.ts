import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontaProvasComponent } from './monta-provas.component';

describe('MontaProvasComponent', () => {
  let component: MontaProvasComponent;
  let fixture: ComponentFixture<MontaProvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontaProvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontaProvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
