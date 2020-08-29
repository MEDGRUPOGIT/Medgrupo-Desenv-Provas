import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesTableComponent } from './grades-table.component';
import { TableModule } from 'primeng/table';
import { GradesFilterComponent } from './grades-filter/grades-filter.component';
import { EnrollmentSearchComponent } from './enrollment-search/enrollment-search.component';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { GradeService } from 'src/app/services/grade/grade.service';
import simulatorsData from 'src/app/services/simulator/simulator.data';
import { DomainService } from 'src/app/services/domain/domain.service';
import { classes, specialties, branches } from 'src/app/services/domain/domain.data';
import { IGrade } from 'src/app/models/grade.model';

describe('GradesTableComponent', () => {
  let component: GradesTableComponent;
  let fixture: ComponentFixture<GradesTableComponent>;
  let gradesService: GradeService
  let domainService: DomainService

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

  beforeEach(() => {
    gradesService = new GradeService();
    domainService = new DomainService();

    gradesService.generateGradesDataBase(simulatorsData())
      .subscribe();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should put position on grades', () => {
    gradesService.grades$
      .subscribe(grades => {
        const gradesOrdened = grades.slice(0, 20)
        const gradesWithPosition = component.setPositionInGrades(gradesOrdened);
        let isWrong = false;
        for (let x = 0; x < gradesWithPosition.length; x++) {
          if (x && gradesWithPosition[x].value > gradesWithPosition[x - 1].value) {
            isWrong = true;
            break;
          }
        }
        expect(isWrong).toEqual(false);
      })
    component.setPositionInGrades();
  });

  it('should filter the table', (done) => {
    const branchSelected = branches[0];
    const classSelected = classes[0];
    const specialtySelected = specialties[0];

    component.table.onFilter.subscribe(event => {
      component.onTableFilter(event)
      let isWrong = false;
      for (let grade of event.filteredValue as IGrade[]) {
        if (
          grade.branch.id !== branchSelected.id ||
          grade.class.id !== classSelected.id ||
          grade.specialty.id !== specialtySelected.id
        ) {
          isWrong = true;
          break;
        }
      }
      expect(isWrong).toEqual(false);
      done();
    })

    gradesService.grades$.subscribe(grades => {
      component.table.value = grades
    })

    component.onFilter({
      branchSelected: [branchSelected],
      classSelected: [classSelected],
      specialtySelected: [specialtySelected]
    })
  })

  it('should put default values with no filter', () => {
    component.onFilter({});
    component.table.filters
    expect(Object.keys(component.table.filters).length).toBe(0)
  })

  it('should update local grades when props grades change', () => {
    component.ngOnChanges({ grades: [] });
    expect(component.grades.length).toEqual(0);
    expect(component.gradesFiltered.length).toEqual(0);
  })

  it('should no update local grades when other props change', () => {
    const { grades, gradesFiltered } = component;
    component.ngOnChanges({ otherProps: [] });
    expect(grades.length).toBe(0);
    expect(gradesFiltered).toBeUndefined();
  })

  it('should put the table on first index', () => {
    component.onSearch('')
    expect(component.table.first).toEqual(0)
  })

  it('should put the first item the enrollment when they', () => {
    gradesService.grades$.subscribe(grades => {
      component.gradesFiltered = grades.slice(0, 10);
      const enrollment = component.gradesFiltered[4].enrollment
      component.onSearch(enrollment);
      expect(component.gradesFiltered[component.table.first].enrollment).toEqual(enrollment)
      component.onSearch('-1')
      expect(component.table.first).toEqual(0);
    })
  })

  it('should download a file', () => {
    gradesService.grades$.subscribe(grades => {
      component.gradesFiltered = grades;
      component.downloadCsv();
      expect(false).toEqual(false);
    })
  })

  it('should open window print', () => {
    component.print()
    expect(false).toEqual(false);
  })
});
