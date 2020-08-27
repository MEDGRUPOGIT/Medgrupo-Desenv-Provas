import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesFilterComponent } from './grades-filter.component';

describe('GradesFilterComponent', () => {
  let component: GradesFilterComponent;
  let fixture: ComponentFixture<GradesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesFilterComponent ]
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
