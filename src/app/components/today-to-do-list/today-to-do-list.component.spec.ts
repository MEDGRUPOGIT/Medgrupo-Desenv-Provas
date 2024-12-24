import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayToDoListComponent } from './today-to-do-list.component';

describe('TodayToDoListComponent', () => {
  let component: TodayToDoListComponent;
  let fixture: ComponentFixture<TodayToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayToDoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
