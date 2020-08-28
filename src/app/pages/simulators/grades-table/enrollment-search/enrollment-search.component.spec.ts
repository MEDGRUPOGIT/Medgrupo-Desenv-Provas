import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentSearchComponent } from './enrollment-search.component';
import { InputTextModule } from 'primeng/inputtext'
describe('EnrollmentSearchComponent', () => {
  let component: EnrollmentSearchComponent;
  let fixture: ComponentFixture<EnrollmentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentSearchComponent],
      imports: [InputTextModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
