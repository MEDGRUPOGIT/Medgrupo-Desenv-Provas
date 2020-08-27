import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorTreeComponent } from './simulator-tree.component';

describe('SimulatorTreeComponent', () => {
  let component: SimulatorTreeComponent;
  let fixture: ComponentFixture<SimulatorTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulatorTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
