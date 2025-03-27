import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMobileComponent } from './header-mobile.component';

describe('HeaderMobileComponent', () => {
  let component: HeaderMobileComponent;
  let fixture: ComponentFixture<HeaderMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
