import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTodoMobileComponent } from './section-todo-mobile.component';

describe('SectionTodoMobileComponent', () => {
  let component: SectionTodoMobileComponent;
  let fixture: ComponentFixture<SectionTodoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTodoMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTodoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
