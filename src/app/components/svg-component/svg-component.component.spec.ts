import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgComponentComponent } from './svg-component.component';

describe('SvgComponentComponent', () => {
  let component: SvgComponentComponent;
  let fixture: ComponentFixture<SvgComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
