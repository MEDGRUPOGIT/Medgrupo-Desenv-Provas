import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLightModeComponent } from './modal-light-mode.component';

describe('ModalLightModeComponent', () => {
  let component: ModalLightModeComponent;
  let fixture: ComponentFixture<ModalLightModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLightModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalLightModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
