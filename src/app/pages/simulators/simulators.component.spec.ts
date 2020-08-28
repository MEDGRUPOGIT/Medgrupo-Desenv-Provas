import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorsComponent } from './simulators.component';
import { SimulatorTreeComponent } from './simulator-tree/simulator-tree.component';
import { SimulatorDetailsComponent } from './simulator-details/simulator-details.component';
import { TreeModule } from 'primeng/tree';
import { ISimulatorSelected } from 'src/app/models/simulator.model';
import { SimulatorService } from 'src/app/services/simulator/simulator.service';

describe('SimulatorsComponent', () => {
  let component: SimulatorsComponent;
  let simulatorService: SimulatorService;
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
    simulatorService = new SimulatorService();
    simulatorService.genereteSimulatorDatabase().subscribe();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onChangeSimulator should change the simulatorSelect Value', (done) => {
    simulatorService.simulators$.subscribe(simulators => {
      const simulatorSelect: ISimulatorSelected = {
        simulator: simulators[0],
        type: simulators[0].types[0]
      }
      component.onChangeSimulator(simulatorSelect)
      expect(component.simulatorSelected).toBe(simulatorSelect)
      component.onChangeSimulator(null)
      expect(component.simulatorSelected).toBe(simulatorSelect);
      done();
    })
  });
});
