import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorsComponent } from './simulators.component';
import { SimulatorTreeComponent } from './simulator-tree/simulator-tree.component';
import { SimulatorDetailsComponent } from './simulator-details/simulator-details.component';
import { TreeModule } from 'primeng/tree';

describe('SimulatorsComponent', () => {
  let component: SimulatorsComponent;
  let fixture: ComponentFixture<SimulatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SimulatorsComponent,
        SimulatorTreeComponent,
        SimulatorDetailsComponent],
      imports: [TreeModule]
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
