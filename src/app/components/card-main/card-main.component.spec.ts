import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMainComponent } from './card-main.component';

describe('CardMainComponent', () => {
  let component: CardMainComponent;
  let fixture: ComponentFixture<CardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
