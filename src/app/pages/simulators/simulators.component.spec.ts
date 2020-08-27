import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorsComponent } from './simulators.component';

describe('SimulatorsComponent', () => {
  let component: SimulatorsComponent;
  let fixture: ComponentFixture<SimulatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
