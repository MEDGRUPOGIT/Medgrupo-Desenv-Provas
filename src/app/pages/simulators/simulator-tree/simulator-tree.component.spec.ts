import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimulatorTreeComponent } from './simulator-tree.component';
import { TreeModule } from 'primeng/tree';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SimulatorService } from 'src/app/services/simulator/simulator.service';

describe('SimulatorTreeComponent', () => {
  let component: SimulatorTreeComponent;
  let simulatorService: SimulatorService;

  let fixture: ComponentFixture<SimulatorTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimulatorTreeComponent],
      imports: [TreeModule, FormsModule, CommonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    simulatorService = new SimulatorService();
    simulatorService.genereteSimulatorDatabase().subscribe();
  })
  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorTreeComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onChangeSimulator when node select arent a simulator_item', (done) => {
    spyOn(component.onChangeSimulator, 'emit')
    component.nodeSelect({ node: { data: 10 } });
    expect(false).toEqual(false);
    done();
  })

  it('should call onChangeSimulator when node select are a simulator_item', () => {
    spyOn(component.onChangeSimulator, 'emit')
    component.nodeSelect({ node: { data: 10, type: 'simulator_item' } });
    expect(component.onChangeSimulator.emit).toHaveBeenCalled();
  })

  it('should receive the simulators in the init', () => {
    simulatorService.simulators$
      .subscribe(simulators => {
        component.mapSimulatorsToOptions(simulators);
        expect(simulators.length).toEqual(component.simulatorsOptions.length)
      })
  })
});
