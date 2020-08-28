import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesTableComponent } from './grades-table.component';
import { TableModule } from 'primeng/table';
import { GradesFilterComponent } from './grades-filter/grades-filter.component';
import { EnrollmentSearchComponent } from './enrollment-search/enrollment-search.component';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

describe('GradesTableComponent', () => {
  let component: GradesTableComponent;
  let fixture: ComponentFixture<GradesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GradesTableComponent, GradesFilterComponent, EnrollmentSearchComponent],
      imports: [TableModule, FormsModule, MultiSelectModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
