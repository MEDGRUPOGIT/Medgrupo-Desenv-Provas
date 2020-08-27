import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesTableComponent } from './grades-table.component';

describe('GradesTableComponent', () => {
  let component: GradesTableComponent;
  let fixture: ComponentFixture<GradesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesTableComponent ]
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
