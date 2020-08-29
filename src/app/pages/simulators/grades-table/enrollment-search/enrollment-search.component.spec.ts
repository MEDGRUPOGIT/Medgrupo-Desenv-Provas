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

  it('should call search if keyup is enter', () => {
    spyOn(component, 'search');
    component.onKeyUp({ keyCode: 13, target: { value: 'teste' } });
    expect(component.search).toHaveBeenCalled();
    component.onKeyUp({ keyCode: 10, target: { value: 'teste' } });
  });

  it('should emit value when search been called', () => {
    spyOn(component.onSearch, 'emit');
    component.search('test')
    expect(component.onSearch.emit).toHaveBeenCalled();
  });
});
