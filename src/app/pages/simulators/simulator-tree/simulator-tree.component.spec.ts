import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimulatorTreeComponent } from './simulator-tree.component';
import { TreeModule } from 'primeng/tree';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('SimulatorTreeComponent', () => {
  let component: SimulatorTreeComponent;
  let fixture: ComponentFixture<SimulatorTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimulatorTreeComponent],
      imports: [TreeModule, FormsModule, CommonModule]
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
