import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GradesFilterComponent } from './grades-filter.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('GradesFilterComponent', () => {
  let component: GradesFilterComponent;
  let fixture: ComponentFixture<GradesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GradesFilterComponent],
      imports: [MultiSelectModule, FormsModule, CommonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
